<template>
  <div class="output">
    <span>{{ displayText() }}</span>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Display } from '../composables/Display'

@Options({
  props: {
    display: Object,
  },
})
export default class OutputDisplay extends Vue {
  display!: Display

  displayText() {
    return this.display.getCurrentlyDisplayedString()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@font-face {
  font-family: 'Calculator Monospace';
  src: url('~@/assets/Digital7Mono-B1g5.ttf');
}
.output {
  border: solid 1px #aaa;
  height: 50px;
  grid-column: span 4;
  font-family: 'Calculator Monospace', monospace;
  font-size: 30px;
  text-align: right;
  color: black;
  display: table;
}
span {
  display: table-cell;
  vertical-align: middle;
  padding: 10px;
}
</style>
