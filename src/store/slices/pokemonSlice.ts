import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { PokemonsResult, PokemonState } from '../../types';

const initialState: PokemonState = {
  page: 0,
  pokemons: [{ url: '', name: '' }],
  isLoading: false,
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action: PayloadAction<PokemonsResult[]>) => {
      state.isLoading = false;
      state.pokemons = action.payload;
    },
  },
});

export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;
export default pokemonSlice.reducer;
