import { useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import useActionsCounter from './hooks/useActionsCounter';
import { useAppSelector } from './hooks/useStore';
import viteLogo from '/vite.svg';

function App(): JSX.Element {
  const [inputNumberValue, setInputNumberValue] = useState<number>(0);
  const count = useAppSelector((state) => state.counter);
  const { incrementValue, decrementValue, incrementByValue } =
    useActionsCounter();

  const handlerInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    evt
  ) => {
    const inputValue: number = Number(evt.target.value);
    setInputNumberValue(inputValue);
  };
  return (
    <>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>React Redux Toolkit</h1>
      <div className="card">
        <input
          type="text"
          aria-label="Set increment amount"
          value={inputNumberValue}
          onChange={handlerInputChange}
        />
        <p>{count.value}</p>
        <button className="button" onClick={incrementValue}>
          Increment
        </button>
        <button className="button" onClick={decrementValue}>
          Decrement
        </button>
        <button
          className="button"
          onClick={() => incrementByValue(inputNumberValue)}
        >
          Increment By input value
        </button>
      </div>
    </>
  );
}

export default App;
