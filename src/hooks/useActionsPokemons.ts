import { getPokemonsThunk } from '../store/slices/pokemonThunks';
import type { ActionsPokemon } from '../types';
import { useAppDispatch } from './useStore';

export function useActionsPokemons(): ActionsPokemon {
  const dispatch = useAppDispatch();

  const getPokemon = (page?: number): void => {
    dispatch(getPokemonsThunk(page));
  };

  return { getPokemon };
}
