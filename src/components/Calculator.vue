<template>
  <div class="calculator-container">
    <OutputDisplay :display="display" />

    <!-- Top Row Buttons -->
    <ButtonOperation
      :display="display"
      :numberCache="numberCache"
      :operationCache="operationCache"
      :lastButtonPushed="lastButtonPushed"
      thisOperation="addition"
    />
    <ButtonOperation
      :display="display"
      :numberCache="numberCache"
      :operationCache="operationCache"
      :lastButtonPushed="lastButtonPushed"
      thisOperation="subtraction"
    />
    <ButtonOperation
      :display="display"
      :numberCache="numberCache"
      :operationCache="operationCache"
      :lastButtonPushed="lastButtonPushed"
      thisOperation="multiplication"
    />
    <ButtonOperation
      :display="display"
      :numberCache="numberCache"
      :operationCache="operationCache"
      :lastButtonPushed="lastButtonPushed"
      thisOperation="division"
    />

    <!-- Second Row Buttons - equals spans three rows -->
    <ButtonEntry
      :display="display"
      :numberCache="numberCache"
      :operationCache="operationCache"
      :lastButtonPushed="lastButtonPushed"
      entry="7"
    />
    <ButtonEntry
      :display="display"
      :numberCache="numberCache"
      :operationCache="operationCache"
      :lastButtonPushed="lastButtonPushed"
      entry="8"
    />
    <ButtonEntry
      :display="display"
      :numberCache="numberCache"
      :operationCache="operationCache"
      :lastButtonPushed="lastButtonPushed"
      entry="9"
    />
    <ButtonEquals
      :display="display"
      :numberCache="numberCache"
      :operationCache="operationCache"
      :lastButtonPushed="lastButtonPushed"
    />

    <!-- Third Row Buttons -->
    <ButtonEntry
      :display="display"
      :numberCache="numberCache"
      :operationCache="operationCache"
      :lastButtonPushed="lastButtonPushed"
      entry="4"
    />
    <ButtonEntry
      :display="display"
      :numberCache="numberCache"
      :operationCache="operationCache"
      :lastButtonPushed="lastButtonPushed"
      entry="5"
    />
    <ButtonEntry
      :display="display"
      :numberCache="numberCache"
      :operationCache="operationCache"
      :lastButtonPushed="lastButtonPushed"
      entry="6"
    />

    <!-- Fourth Row Buttons -->
    <ButtonEntry
      :display="display"
      :numberCache="numberCache"
      :operationCache="operationCache"
      :lastButtonPushed="lastButtonPushed"
      entry="1"
    />
    <ButtonEntry
      :display="display"
      :numberCache="numberCache"
      :operationCache="operationCache"
      :lastButtonPushed="lastButtonPushed"
      entry="2"
    />
    <ButtonEntry
      :display="display"
      :numberCache="numberCache"
      :operationCache="operationCache"
      :lastButtonPushed="lastButtonPushed"
      entry="3"
    />

    <!-- Fifth Row Buttons -->
    <ButtonEntry
      :display="display"
      :numberCache="numberCache"
      :operationCache="operationCache"
      :lastButtonPushed="lastButtonPushed"
      entry="0"
    />
    <ButtonEntry
      :display="display"
      :numberCache="numberCache"
      :operationCache="operationCache"
      :lastButtonPushed="lastButtonPushed"
      entry="."
    />
    <ButtonClear
      :display="display"
      :numberCache="numberCache"
      :operationCache="operationCache"
      :lastButtonPushed="lastButtonPushed"
    />
  </div>
</template>

<script lang="ts">
import { Options, setup, Vue } from 'vue-class-component'

// Child Components
import OutputDisplay from './OutputDisplay.vue'
import ButtonOperation from './ButtonOperation.vue'
import ButtonEntry from './ButtonEntry.vue'
import ButtonEquals from './ButtonEquals.vue'
import ButtonClear from './ButtonClear.vue'

// Reactive Composables - will pass to child components as props where necessary
import { useDisplay } from '../composables/Display'
import { useNumberCache } from '../composables/NumberCache'
import { useOperationCache } from '../composables/OperationCache'
import { useLastButtonPushed } from '../composables/LastButtonPushed'

@Options({
  components: {
    OutputDisplay,
    ButtonOperation,
    ButtonEntry,
    ButtonEquals,
    ButtonClear
  }
})
export default class Calculator extends Vue {
  display = setup(() => useDisplay())
  numberCache = setup(() => useNumberCache())
  operationCache = setup(() => useOperationCache())
  lastButtonPushed = setup(() => useLastButtonPushed())
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.calculator-container {
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(4, 1fr);
  border: solid 1px #aaa;
  padding: 18px;
  width: 360px;
  margin: 50px auto 0px auto;
}
</style>
