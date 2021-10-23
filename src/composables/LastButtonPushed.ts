import { reactive } from 'vue'

export enum ButtonType {
  None = 'None',
  Equals = 'Equals',
  Number = 'Number',
  Operation = 'Operation',
}

interface State {
  lastButtonPushed: ButtonType
}

export interface LastButtonPushed {
  getLastButtonPushed: () => ButtonType
  setLastButtonPushed: (button: ButtonType) => void
}

export function useLastButtonPushed() {
  const state: State = reactive({
    lastButtonPushed: ButtonType.None,
  })

  // Getters
  function getLastButtonPushed(): ButtonType {
    return state.lastButtonPushed
  }

  // Setters
  function setLastButtonPushed(button: ButtonType): void {
    state.lastButtonPushed = button
  }

  return {
    getLastButtonPushed,
    setLastButtonPushed,
  }
}
