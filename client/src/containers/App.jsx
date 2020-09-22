import React, { useState } from 'react';
import Game from './Game';
import GameOver from '../components/GameOver'

function App() {
  const [gameOver, setGameOver] = useState(false);
  const winGame = () => setGameOver(true);
  const restart = () => setGameOver(false);

  return (
    <div className="App">
      { gameOver 
        ? <GameOver restart={restart}/>
        : <Game winGame={winGame} />
      }
    </div>
  );
}

export default App;
