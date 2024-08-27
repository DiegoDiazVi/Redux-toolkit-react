import type { Dispatch, GetState } from '@reduxjs/toolkit';
import type { PokemonsActionPayload, PokemonsResponse } from '../../types';
import { setPokemons, startLoadingPokemons } from './pokemonSlice';

export const getPokemonsThunk = (page: number = 0) => {
  return async (dispatch: Dispatch, getState: GetState) => {
    dispatch(startLoadingPokemons());
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`
      );
      const data: PokemonsResponse = await response.json();
      const { results } = data;
      const payload: PokemonsActionPayload = {
        page: page + 1,
        pokemons: results,
      };
      dispatch(setPokemons(payload));
    } catch (error) {
      throw new Error(error as string);
    }
  };
};
