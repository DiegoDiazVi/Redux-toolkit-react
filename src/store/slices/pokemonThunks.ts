import type { Dispatch, GetState } from '@reduxjs/toolkit';
import { startLoadingPokemons } from './pokemonSlice';

export const getPokemonsThunk = (page: number = 0) => {
  return async (dispatch: Dispatch, getState: GetState) => {
    console.log('Dispatch !!!!');
    dispatch(startLoadingPokemons());
  };
};
