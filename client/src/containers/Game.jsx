import React, { useState } from 'react';
import GameTick from '../components/GameTick';
import MainButton from '../components/MainButton';
import ResourceTracker from '../components/ResourceTracker';

const Game = () => {

  // Resource state hooks
  const [parts, setParts] = useState(0);
  // Autoclicker state hooks
  const [partsClickersTier1, setPartsClickersTier1] = useState(0);

  // Methods for increasing resources
  const handleMainButtonClick = () => setParts(parts + 1);
  const addParts = n => setParts(parts + n);


  return (
    <div id="game-container">
      <GameTick partsClickersTier1={partsClickersTier1}
                addParts={addParts}/>

      <ResourceTracker parts={parts}/>
      <MainButton handleMainButtonClick={handleMainButtonClick}/>
    </div>
  );
}
 
 
export default Game;
