import { useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App(): JSX.Element {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />

        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>React Redux Toolkit</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
