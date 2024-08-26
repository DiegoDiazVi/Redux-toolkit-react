import { getPokemonsThunk } from '../store/slices/pokemonThunks';
import { useAppDispatch } from './useStore';

interface ActionsPokemon {
  getPokemon: () => void;
}

export const useActionsPokemons = (): ActionsPokemon => {
  const dispatch = useAppDispatch();

  const getPokemon = (): void => {
    dispatch(getPokemonsThunk());
  };

  return { getPokemon };
};
