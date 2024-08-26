import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlices';
import pokemonReducer from './slices/pokemonSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemon: pokemonReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
