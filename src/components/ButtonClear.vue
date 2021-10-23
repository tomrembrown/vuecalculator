<template>
  <div class="button-light">
    <button @click="pushClearButton()">C</button>
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
    display: Object,
    numberCache: Object,
    operationCache: Object,
    lastButtonPushed: Object,
  },
})
export default class ButtonClear extends Vue {
  display!: Display
  numberCache!: NumberCache
  operationCache!: OperationCache
  lastButtonPushed!: LastButtonPushed

  pushClearButton(): void {
    this.display.resetDisplayToZero()
    this.display.setToBeCachedToFalse()
    this.numberCache.emptyCache()
    this.operationCache.emptyCache()
    this.lastButtonPushed.setLastButtonPushed(ButtonType.None)
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
