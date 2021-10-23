<template>
  <div class="button-light">
    <button @click="pushNumberButton()">{{ entry }}</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Display } from '../composables/Display'
import { NumberCache } from '../composables/NumberCache'
import { OperationCache } from '../composables/OperationCache'
import { ButtonType, LastButtonPushed } from '../composables/LastButtonPushed'

@Options({
  props: {
    entry: {
      validator: function(value: string): boolean {
        return value.length === 1
      },
      required: true
    },
    display: Object,
    numberCache: Object,
    operationCache: Object,
    lastButtonPushed: Object
  }
})
export default class ButtonEntry extends Vue {
  entry!: string
  display!: Display
  numberCache!: NumberCache
  operationCache!: OperationCache
  lastButtonPushed!: LastButtonPushed

  pushNumberButton(): void {
    // Just to make logic easier to read below
    const characterPushed = this.entry
    const display = this.display // object - so pass by reference
    const numberCache = this.numberCache
    const operationCache = this.operationCache
    const lastButtonPushed = this.lastButtonPushed

    if (lastButtonPushed.getLastButtonPushed() === ButtonType.Equals) {
      operationCache.emptyCache()
    }

    if (display.isToBeCached()) {
      numberCache.setCacheAs(display.getCurrentlyDisplayedNumber())
      display.resetDisplayToZero()
      display.setToBeCachedToFalse()
    }
    display.addToDisplay(characterPushed)
    lastButtonPushed.setLastButtonPushed(ButtonType.Number)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.button-light button {
  width: 80px;
  height: 50px;
  border: solid 1px #aaa;
  background-color: #ccc;
  font-family: 'Fira Sans', sans-serif;
  font-size: 20px;
  text-align: center;
  color: black;
}
</style>
