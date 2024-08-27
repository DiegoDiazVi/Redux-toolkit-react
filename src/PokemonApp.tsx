import { useEffect } from 'react';
import './App.css';
import { useActionsPokemons } from './hooks/useActionsPokemons';
import { useAppSelector } from './hooks/useStore';

export const PokemonApp = (): JSX.Element => {
  const { getPokemon } = useActionsPokemons();
  const { page, isLoading, pokemons } = useAppSelector(
    (state) => state.pokemon
  );

  const handleClick = () => {
    getPokemon(page);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <>
      <h2>Pokemon App</h2>
      <hr />

      <p>Cargando: {String(isLoading)}</p>
      <ul style={{ padding: '0' }}>
        {pokemons.map((pokemon) => {
          return (
            <li style={{ listStyle: 'none' }} key={pokemon.name}>
              <p>{pokemon.name}</p>
            </li>
          );
        })}
      </ul>

      <button disabled={isLoading} onClick={handleClick}>
        Next page
      </button>
    </>
  );
};
