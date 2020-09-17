import React, { useState } from 'react';

// Renderless component
// Handles effects at game-tick interval (primarily addition of resources from autoclickers)

const GameTick = (props) => {

  const partsToAdd = props.partsClickersTier1

  setInterval(() => {
    props.addParts(5)
  }, 1000);

  
  return null;
}
 
export default GameTick;
