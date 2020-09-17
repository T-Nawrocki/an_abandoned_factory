import React, { useState } from 'react';
import MainButton from './MainButton';
import ResourceTracker from './ResourceTracker';

const Game = () => {

  const [parts, setParts] = useState(0);
  
  const handleMainButtonClick = () => setParts(parts + 1);

  return (
    <div id="game-container">
      <ResourceTracker parts={parts}/>
      <MainButton handleMainButtonClick={handleMainButtonClick}/>
    </div>
  );
}
 
export default Game;
