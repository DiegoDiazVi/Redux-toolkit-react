import { startLoadingPokemons } from './pokemonSlice';

export const getPokemonsThunk = (page: number = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());
  };
};
