import React, { useState } from 'react';
import Game from './Game';
import GameOver from '../components/GameOver'
import '../styles/App.css';

function App() {
  const [gameOver, setGameOver] = useState(false);
  const winGame = () => setGameOver(true);

  return (
    <div className="App">
      { gameOver 
        ? <GameOver />
        : <Game winGame={winGame} />
      }
    </div>
  );
}

export default App;
