import './App.css';
import reactLogo from './assets/react.svg';
import { useCounter } from './hooks/useCounter';
import viteLogo from '/vite.svg';

function App(): JSX.Element {
  const {
    inputNumberValue,
    valueCounter,
    incrementValue,
    incrementByValue,
    decrementValue,
    handlerInputChange,
  } = useCounter();

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
        <p>{valueCounter}</p>
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
