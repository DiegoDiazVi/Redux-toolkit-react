import { decrement, increment } from '../store/slices/counterSlices';
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

  return { incrementValue, decrementValue };
}

export default useActionsCounter;
