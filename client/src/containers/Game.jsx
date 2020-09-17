import React, { useState, useEffect } from 'react';
import MainButton from '../components/MainButton';
import ResourceTracker from '../components/ResourceTracker';

const Game = () => {

  // Resource state hooks
  const [parts, setParts] = useState(0);
  // Autoclicker state hooks
  const [partsClickersTier1, setPartsClickersTier1] = useState(0);
  // Other state hooks
  const [tickSpeed, setTickSpeed] = useState(1000)

  // Methods to pass as props
  const handleMainButtonClick = () => setParts(parts + 1);

  // Resource per tick calculations
  const partsPerTick = partsClickersTier1;
  

  // GameTick
  useEffect(() => {
    const interval = setInterval(() => {
      setParts(parts + partsPerTick)
    }, tickSpeed)
    return () => clearInterval(interval);  // clears interval during cleanup
  }, [parts, partsPerTick, tickSpeed]);

  return (
    <div id="game-container">
      <ResourceTracker parts={parts}/>
      <MainButton handleMainButtonClick={handleMainButtonClick}/>
    </div>
  );
}
 
 
export default Game;
