import './App.css';
import React, { useRef } from 'react';
import Settings from './Settings.jsx';
import Minesweeper from './Minesweeper.jsx';

function App() {

  const game = useRef(null);

  return (
    <>
      <Settings game={game}/>
      <Minesweeper ref={game}/>
      <button onClick={() => console.log(game.current)}>Paina</button>
    </>
  )
}

export default App
