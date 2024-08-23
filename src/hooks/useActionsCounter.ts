import { increment } from '../store/slices/counterSlices';
import { ActionsCounter } from '../types';
import { useAppDispatch } from './useStore';

function useActionsCounter(): ActionsCounter {
  const dispatch = useAppDispatch();

  const incrementValue = () => {
    dispatch(increment());
  };

  return { incrementValue };
}

export default useActionsCounter;
