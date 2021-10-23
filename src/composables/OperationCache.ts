import { reactive } from 'vue'

interface State {
  operationCached: string
  isAnOperationCached: boolean
}

export interface OperationCache {
  isFull: () => boolean
  getCachedOperation: () => string
  setCacheAs: (inputOperation: string) => void
  emptyCache: () => void
}

export function useOperationCache() {
  const state: State = reactive({
    operationCached: '',
    isAnOperationCached: false
  })

  // Getters
  function isFull(): boolean {
    return state.isAnOperationCached
  }
  function getCachedOperation(): string {
    return state.operationCached
  }

  // Setters
  function setCacheAs(inputOperation: string): void {
    state.operationCached = inputOperation
    state.isAnOperationCached = true
  }
  function emptyCache(): void {
    state.isAnOperationCached = false
  }

  return {
    isFull,
    getCachedOperation,
    setCacheAs,
    emptyCache
  }
}
