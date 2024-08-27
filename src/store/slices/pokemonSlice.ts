import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { PokemonsActionPayload, PokemonState } from '../../types';

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
    setPokemons: (state, action: PayloadAction<PokemonsActionPayload>) => {
      state.isLoading = false;
      state.pokemons = action.payload.pokemons;
      state.page = action.payload.page;
    },
  },
});

export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;
export default pokemonSlice.reducer;
