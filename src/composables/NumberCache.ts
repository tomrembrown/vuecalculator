import { reactive } from 'vue'

interface State {
  numberCached: number
  isANumberCached: boolean
}

export interface NumberCache {
  isFull: () => boolean
  getCachedNumber: () => number
  setCacheAs: (inputNumber: number) => void
  emptyCache: () => void
}

export function useNumberCache() {
  const state: State = reactive({
    numberCached: 0,
    isANumberCached: false,
  })

  // Getters
  function isFull(): boolean {
    return state.isANumberCached
  }
  function getCachedNumber(): number {
    return state.numberCached
  }

  // Setters
  function setCacheAs(inputNumber: number): void {
    state.numberCached = inputNumber
    state.isANumberCached = true
  }
  function emptyCache(): void {
    state.isANumberCached = false
  }

  return {
    isFull,
    getCachedNumber,
    setCacheAs,
    emptyCache,
  }
}
