import { useEffect } from 'react';
import './App.css';
import { useActionsPokemons } from './hooks/useActionsPokemons';
import { useAppSelector } from './hooks/useStore';

export const PokemonApp = (): JSX.Element => {
  const { getPokemon } = useActionsPokemons();
  const pokemonsState = useAppSelector((state) => state.pokemon);
  const { page, isLoading, pokemons } = pokemonsState;

  const loading = isLoading === true;

  const handleClick = () => {
    getPokemon(page);
  };

  useEffect(() => {
    getPokemon();
  }, [getPokemon]);

  return (
    <>
      <h2>Pokemon App</h2>
      <hr />

      <p>Cargando: {loading}</p>
      <ul>
        <li>hola</li>
        <li>hola</li>
        <li>hola</li>
      </ul>

      <button disabled={loading} onClick={handleClick}>
        Next page
      </button>
    </>
  );
};
