import './App.css';
import React, { useRef, useState } from 'react';
import Settings from './Settings.jsx';
import Minesweeper from './Minesweeper.jsx';
import Minecounter from './Minecounter.jsx';
import Difficulty from './Difficulty.jsx';

function App() {

  const [settings, setSettings] = useState([0, 0, 0]);
  const [mineCount, setMineCount] = useState(null);
  const [custom, setCustom] = useState(false);
  const game = useRef(null);

  return (
    <>
      <Difficulty setSettings={setSettings} setMineCount={setMineCount} setCustom={setCustom} custom={custom} />
      <Settings setSettings={setSettings} setMineCount={setMineCount} custom={custom} />
      <Minecounter mineCount={mineCount} />
      <Minesweeper game={game} settings={settings} mineCount={mineCount} setMineCount={setMineCount} />
    </>
  )
}

export default App;