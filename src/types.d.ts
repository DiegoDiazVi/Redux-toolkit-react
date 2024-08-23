export interface CounterState {
  value: number;
}

export interface ActionsCounter {
  incrementValue: () => void;
  incrementByValue: (value: number) => void;
  decrementValue: () => void;
}
