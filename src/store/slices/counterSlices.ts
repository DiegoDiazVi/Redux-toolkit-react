import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CounterState } from '../../types';

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementBy: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementBy } = counterSlice.actions;
export default counterSlice.reducer;
