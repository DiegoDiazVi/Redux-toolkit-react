export interface CounterState {
  value: number;
}

export interface ActionsCounter {
  incrementValue: () => void;
  incrementByValue: (value: number) => void;
  decrementValue: () => void;
}

export interface UseCounterReturn extends ActionsCounter {
  inputNumberValue: number;
  valueCounter: number;
  handlerInputChange: React.ChangeEventHandler<HTMLInputElement>;
}

export interface ActionsPokemon {
  getPokemon: () => void;
}

export interface PokemonsResult {
  name: string;
  url: string;
}
export interface Pokemons {
  count: number;
  next: string;
  previous: null;
  results: PokemonsResult[];
}

export interface PokemonState {
  page: number;
  pokemons: PokemonsResult[];
  isLoading: boolean;
}
