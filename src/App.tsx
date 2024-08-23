import './App.css';
import reactLogo from './assets/react.svg';
import useActionsCounter from './hooks/useActionsCounter';
import { useAppSelector } from './hooks/useStore';
import viteLogo from '/vite.svg';

function App(): JSX.Element {
  const count = useAppSelector((state) => state.counter);
  const { incrementValue, decrementValue } = useActionsCounter();

  return (
    <>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />

        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>React Redux Toolkit</h1>
      <div className="card">
        <p>{count.value}</p>
        <button className="button" onClick={incrementValue}>
          Increment
        </button>
        <button className="button" onClick={decrementValue}>
          Decrement
        </button>
      </div>
    </>
  );
}

export default App;
