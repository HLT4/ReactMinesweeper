import './App.css';
import React, { useRef, useState } from 'react';
import Settings from './Settings.jsx';
import Minesweeper from './Minesweeper.jsx';

function App() {

  const [settings, setSettings] = useState([0, 0, 0]);
  const game = useRef(null);

  return (
    <>
      <Settings game={game} setSettings={setSettings} />
      <Minesweeper ref={game} settings={settings}/>
    </>
  )
}

export default App
