// Counter related types
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

// Pokemon related types
export interface ActionsPokemon {
  getPokemon: () => void;
}

export interface PokemonsResult {
  name: string;
  url: string;
}

export interface PokemonsResponse {
  count: number;
  next: string;
  previous: null;
  results: PokemonsResult[];
}

interface PokemonsActionPayload {
  page: number;
  pokemons: PokemonsResult[];
}

export interface PokemonState extends PokemonsActionPayload {
  isLoading: boolean;
}
