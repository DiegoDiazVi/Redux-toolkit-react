export interface CounterState {
  value: number;
}

export interface ActionsCounter {
  incrementValue: () => void;
  incrementByValue: (value: number) => void;
  decrementValue: () => void;
}

export interface UseCounterReturn extends ActionsCounter {
  inputNumberValue: number;
  valueCounter: number;
  handlerInputChange: React.ChangeEventHandler<HTMLInputElement>;
}
