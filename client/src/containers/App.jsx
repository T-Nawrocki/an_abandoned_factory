import React, { useState } from 'react';
import Game from './Game';
import GameOver from '../components/GameOver'
import SaveSelectionModal from '../components/SaveSelectionModal';

function App() {
  const [saveData, setSaveData] = useState(null);
  const [saveSlotIsSelected, setSaveSlotIsSelected] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const winGame = () => setGameOver(true);
  const restart = () => setGameOver(false);

  const selectSaveSlot = (data) => {
    setSaveData(data);
    setSaveSlotIsSelected(true);
  }

  return (
    
    <div className="App">
      <SaveSelectionModal selectSaveSlot={selectSaveSlot} />
      { gameOver 
        ? <GameOver restart={restart}/>
        : <Game saveData={saveData} winGame={winGame} />
      }
    </div>
  );
}

export default App;
