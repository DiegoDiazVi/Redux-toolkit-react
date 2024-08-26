import { startLoadingPokemons } from './pokemonSlice';

export const getPokemons = (page: number = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());
  };
};
