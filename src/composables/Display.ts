import { reactive } from 'vue'

interface State {
  isToBeCachedFlag: boolean
  displayedNumberAsString: string
}

export interface Display {
  isToBeCached: () => boolean
  getCurrentlyDisplayedNumber: () => number
  getCurrentlyDisplayedString: () => string
  changeTo: (inputNumber: number) => void
  setToBeCachedToTrue: () => void
  setToBeCachedToFalse: () => void
  resetDisplayToZero: () => void
  addToDisplay: (character: string) => void
}

export function useDisplay() {
  const MAX_DISPLAY_LENGTH = 25

  const state: State = reactive({
    isToBeCachedFlag: false,
    displayedNumberAsString: '0'
  })

  // Getters
  function isToBeCached(): boolean {
    return state.isToBeCachedFlag
  }
  function getCurrentlyDisplayedNumber(): number {
    return Number.parseFloat(state.displayedNumberAsString)
  }
  function getCurrentlyDisplayedString(): string {
    return state.displayedNumberAsString
  }

  // Setters
  function changeTo(inputNumber: number): void {
    state.displayedNumberAsString = inputNumber.toString()
  }
  function setToBeCachedToTrue(): void {
    state.isToBeCachedFlag = true
  }
  function setToBeCachedToFalse(): void {
    state.isToBeCachedFlag = false
  }
  function resetDisplayToZero(): void {
    state.displayedNumberAsString = '0'
  }
  function addToDisplay(character: string): void {
    if (state.displayedNumberAsString === '0') {
      if (character === '.') {
        state.displayedNumberAsString = '0.'
      } else if (character !== '0') {
        state.displayedNumberAsString = character
      }
    } else {
      if (
        state.displayedNumberAsString.length < MAX_DISPLAY_LENGTH &&
        !(state.displayedNumberAsString.includes('.') && character === '.')
      ) {
        state.displayedNumberAsString += character
      }
    }
  }

  return {
    isToBeCached,
    getCurrentlyDisplayedNumber,
    getCurrentlyDisplayedString,
    changeTo,
    setToBeCachedToTrue,
    setToBeCachedToFalse,
    resetDisplayToZero,
    addToDisplay
  }
}
