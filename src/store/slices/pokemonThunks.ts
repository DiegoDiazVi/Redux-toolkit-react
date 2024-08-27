import type { Dispatch, GetState } from '@reduxjs/toolkit';
import { Pokemons } from '../../types';
import { setPokemons, startLoadingPokemons } from './pokemonSlice';

export const getPokemonsThunk = (page: number = 0) => {
  return async (dispatch: Dispatch, getState: GetState) => {
    dispatch(startLoadingPokemons());
    try {
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'
      );
      const data: Pokemons = await response.json();
      const { results } = data;
      dispatch(setPokemons(results));
    } catch (error) {
      throw new Error(error as string);
    }
  };
};
