import { useEffect } from 'react';
import './App.css';
import { useActionsPokemons } from './hooks/useActionsPokemons';

export const PokemonApp = (): JSX.Element => {
  const { getPokemon } = useActionsPokemons();

  useEffect(() => {
    getPokemon();
  }, [getPokemon]);

  return (
    <>
      <h2>Pokemon App</h2>
      <hr />

      <ul>
        <li>hola</li>
        <li>hola</li>
        <li>hola</li>
      </ul>
    </>
  );
};
