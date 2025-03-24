// src/App.js
import React, { useState } from 'react';
import Board from './components/Board';
import ResetButton from './components/ResetButton';
import Celebration from './components/Celebration';
import './styles/App.css';

function App() {
  const [gameKey, setGameKey] = useState(0);
  const [isWinner, setIsWinner] = useState(false);
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setGameKey(prevKey => prevKey + 1);
    setIsWinner(false);
    setWinner(null);
  };

  const handleWin = (player) => {
    setIsWinner(true);
    setWinner(player);
  };

  return (
    <div className="App">
      <header>
        <h1>Gomoku</h1>
      </header>
      <Board key={gameKey} size={15} onWin={handleWin} />
      <ResetButton onClick={resetGame} />
      <Celebration isWinner={isWinner} winner={winner} />
    </div>
  );
}

export default App;
