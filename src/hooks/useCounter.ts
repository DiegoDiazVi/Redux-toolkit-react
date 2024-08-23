import { useState } from 'react';
import type { UseCounterReturn } from '../types';
import useActionsCounter from './useActionsCounter';
import { useAppSelector } from './useStore';

export function useCounter(): UseCounterReturn {
  const [inputNumberValue, setInputNumberValue] = useState<number>(0);
  const count = useAppSelector((state) => state.counter);
  const { value: valueCounter } = count;
  const { incrementValue, decrementValue, incrementByValue } =
    useActionsCounter();

  const handlerInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    evt
  ) => {
    const inputValue: number = Number(evt.target.value);
    setInputNumberValue(inputValue);
  };

  return {
    inputNumberValue,
    valueCounter,
    incrementByValue,
    incrementValue,
    decrementValue,
    handlerInputChange,
  };
}
