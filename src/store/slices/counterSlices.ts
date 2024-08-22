import { createSlice } from '@reduxjs/toolkit';
import type { CounterState } from '../../types';

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      return {
        ...state,
        value: state.value + 1,
      };
    },
  },
});

export default counterSlice.reducer;
