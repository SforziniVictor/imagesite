import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import topBar from './modules/module1';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <topBar/>
    </>
  );
}

export default App;
