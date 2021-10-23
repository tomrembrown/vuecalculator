<template>
  <div class="button-equals">
    <button @click="pushEqualsButton()">=</button>
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
    display: Object,
    numberCache: Object,
    operationCache: Object,
    lastButtonPushed: Object,
  },
})
export default class ButtonEquals extends Vue {
  display!: Display
  numberCache!: NumberCache
  operationCache!: OperationCache
  lastButtonPushed!: LastButtonPushed

  pushEqualsButton(): void {
    // Just to make logic easier to read below
    const display = this.display
    const numberCache = this.numberCache
    const operationCache = this.operationCache
    const lastButtonPushed = this.lastButtonPushed

    if (numberCache.isFull() && operationCache.isFull()) {
      let firstNumber: number
      let secondNumber: number
      if (lastButtonPushed.getLastButtonPushed() === ButtonType.Equals) {
        secondNumber = numberCache.getCachedNumber()
        firstNumber = display.getCurrentlyDisplayedNumber()
      } else {
        firstNumber = numberCache.getCachedNumber()
        secondNumber = display.getCurrentlyDisplayedNumber()
        numberCache.setCacheAs(secondNumber)
      }

      const operationForCalculation = operationCache.getCachedOperation()

      const calculationResult = doCalculation(
        firstNumber,
        operationForCalculation,
        secondNumber
      )
      display.changeTo(calculationResult)
    }
    display.setToBeCachedToTrue()
    lastButtonPushed.setLastButtonPushed(ButtonType.Equals)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.button-equals {
  grid-row: span 4;
}
.button-equals button {
  width: 80px;
  height: 236px;
  background-color: #008cff;
  border: solid 1px #aaa;
  font-family: 'Fira Sans', sans-serif;
  font-size: 20px;
  text-align: center;
  color: white;
}
</style>
