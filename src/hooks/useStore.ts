import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux';
import { AppDispatch, RootState } from '../store/store';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export { useAppDispatch, useAppSelector };
