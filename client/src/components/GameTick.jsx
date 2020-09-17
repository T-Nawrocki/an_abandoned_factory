import React, { useEffect } from 'react';

// Renderless component
// Handles effects at game-tick interval (primarily addition of resources from autoclickers)

const GameTick = (props) => {

  const partsToAdd = 1 //props.partsClickersTier1

  setTimeout(() => {
    if (partsToAdd) props.addParts(partsToAdd);
  }, 1000);
  
  return null;
}
 
export default GameTick;
