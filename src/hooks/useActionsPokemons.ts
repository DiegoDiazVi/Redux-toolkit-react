import { getPokemonsThunk } from '../store/slices/pokemonThunks';
import { ActionsPokemon } from '../types';
import { useAppDispatch } from './useStore';

export const useActionsPokemons = (): ActionsPokemon => {
  const dispatch = useAppDispatch();

  const getPokemon = (): void => {
    dispatch(getPokemonsThunk());
  };

  return { getPokemon };
};
