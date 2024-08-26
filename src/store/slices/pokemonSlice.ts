import { createSlice } from '@reduxjs/toolkit';

interface PokemonState {
  page: number;
  pokemons: object;
  isLoading: boolean;
}

const initialState: PokemonState = {
  page: 0,
  pokemons: {},
  isLoading: false,
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
});

export const {} = pokemonSlice.actions;
export default pokemonSlice.reducer;
