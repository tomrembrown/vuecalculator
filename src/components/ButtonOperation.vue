<template>
  <div class="button-dark">
    <button v-html="buttonText()" @click="pushButtonOperation()"></button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

import { Display } from '../composables/Display'
import { NumberCache } from '../composables/NumberCache'
import { OperationCache } from '../composables/OperationCache'
import { ButtonType, LastButtonPushed } from '../composables/LastButtonPushed'

import doCalculation from '../functions/doCalculation'

@Options({
  props: {
    thisOperation: {
      validator: function (value: string): boolean {
        // The value must match one of these strings
        return (
          ['addition', 'subtraction', 'multiplication', 'division'].indexOf(
            value
          ) !== -1
        )
      },
      required: true,
    },
    display: Object,
    numberCache: Object,
    operationCache: Object,
    lastButtonPushed: Object,
  },
})
export default class ButtonOperation extends Vue {
  thisOperation!: string

  display!: Display
  numberCache!: NumberCache
  operationCache!: OperationCache
  lastButtonPushed!: LastButtonPushed

  buttonText(): string {
    let returnValue = ''
    switch (this.thisOperation) {
      case 'addition': {
        returnValue = '+'
        break
      }
      case 'subtraction': {
        returnValue = '-'
        break
      }
      case 'multiplication': {
        returnValue = 'x'
        break
      }
      case 'division': {
        returnValue = '&#247;' // Unicode for division symbol is 247
        break
      }
    }
    return returnValue
  }
  pushButtonOperation(): void {
    // Just to make logic easier to read below
    const numberCache = this.numberCache
    const operationCache = this.operationCache
    const display = this.display
    const operationPushed = this.thisOperation
    const lastButtonPushed = this.lastButtonPushed

    if (
      lastButtonPushed.getLastButtonPushed() !== ButtonType.Equals &&
      numberCache.isFull() &&
      operationCache.isFull()
    ) {
      const firstNumber = numberCache.getCachedNumber()
      const operationForCalculation = operationCache.getCachedOperation()
      const secondNumber = display.getCurrentlyDisplayedNumber()
      const calculationResult = doCalculation(
        firstNumber,
        operationForCalculation,
        secondNumber
      )
      display.changeTo(calculationResult)
    }
    operationCache.setCacheAs(operationPushed)
    numberCache.emptyCache()
    display.setToBeCachedToTrue()
    lastButtonPushed.setLastButtonPushed(ButtonType.Operation)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.button-dark button {
  width: 80px;
  height: 50px;
  border: solid 1px #aaa;
  background-color: #999;
  font-family: 'Fira Sans', sans-serif;
  font-size: 20px;
  text-align: center;
  color: black;
}
</style>
