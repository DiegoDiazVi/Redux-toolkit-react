export interface CounterState {
  value: number;
}

export interface ActionsCounter {
  incrementValue: () => void;
  decrementValue: () => void;
}
