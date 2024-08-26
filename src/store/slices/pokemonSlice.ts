import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

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
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action: PayloadAction<PokemonState>) => {
      console.log(action, state);
    },
  },
});

export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;
export default pokemonSlice.reducer;
