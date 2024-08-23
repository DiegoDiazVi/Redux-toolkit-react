import {
  decrement,
  increment,
  incrementBy,
} from '../store/slices/counterSlices';
import { ActionsCounter } from '../types';
import { useAppDispatch } from './useStore';

function useActionsCounter(): ActionsCounter {
  const dispatch = useAppDispatch();

  const incrementValue = () => {
    dispatch(increment());
  };

  const decrementValue = () => {
    dispatch(decrement());
  };

  const incrementByValue = (value: number) => {
    dispatch(incrementBy(value));
  };

  return { incrementValue, decrementValue, incrementByValue };
}

export default useActionsCounter;
