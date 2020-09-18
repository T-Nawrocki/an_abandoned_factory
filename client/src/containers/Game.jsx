import React, { useState, useEffect } from 'react';
import MainButton from '../components/MainButton';
import ResourceTracker from '../components/ResourceTracker';
import Shop from './Shop';
import { partsAutoclickers } from '../data/PartsAutoclickers'

const Game = () => {

  // Resource state hooks
  const [parts, setParts] = useState(0);
  // Autoclicker state hooks
  const [ownedPartsAutoclickersT1, setownedPartsAutoclickersT1] = useState(0);
  const [ownedPartsAutoclickersT2, setownedPartsAutoclickersT2] = useState(0);
  const [ownedPartsAutoclickersT3, setownedPartsAutoclickersT3] = useState(0);
  // Other state hooks
  const [tickSpeed, setTickSpeed] = useState(1000)

  // Methods to pass as props
  const handleMainButtonClick = () => setParts(parts + 1);
  const addPartsAutoclickersTier1 = n => {
    setownedPartsAutoclickersT1(ownedPartsAutoclickersT1 + n)
  };
  const addPartsAutoclickersTier2 = n => {
    setownedPartsAutoclickersT2(ownedPartsAutoclickersT2 + n)
  };
  const addPartsAutoclickersTier3 = n => {
    setownedPartsAutoclickersT3(ownedPartsAutoclickersT3 + n)
  };

  // Resource per tick calculations
  const partsPerTick = ownedPartsAutoclickersT1 * partsAutoclickers[0].productionBase 
    + ownedPartsAutoclickersT2 * partsAutoclickers[1].productionBase
    + ownedPartsAutoclickersT3 * partsAutoclickers[2].productionBase;
  

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
      <Shop ownedAutoclickers={{
              partsT1: ownedPartsAutoclickersT1,
              partsT2: ownedPartsAutoclickersT2,
              partsT3: ownedPartsAutoclickersT3
            }}
            addPartsAutoclickersTier1={addPartsAutoclickersTier1}
            addPartsAutoclickersTier2={addPartsAutoclickersTier2}
            addPartsAutoclickersTier3={addPartsAutoclickersTier3}
      />
    </div>
  );
}
 
export default Game;
