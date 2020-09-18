import React, { useState, useEffect } from 'react';
import MainButton from '../components/MainButton';
import ResourceTracker from '../components/ResourceTracker';
import Shop from './Shop';
import { partsAutoclickers } from '../data/PartsAutoclickers'

const Game = () => {

  const [tickSpeed, setTickSpeed] = useState(1000)
  const [parts, setParts] = useState(0);
  const [ownedPartsAutoclickersT1, setownedPartsAutoclickersT1] = useState(0);
  const [ownedPartsAutoclickersT2, setownedPartsAutoclickersT2] = useState(0);
  const [ownedPartsAutoclickersT3, setownedPartsAutoclickersT3] = useState(0);


  const handleMainButtonClick = () => setParts(parts + 1);
  const addPartsAutoclickersT1 = n => {
    setownedPartsAutoclickersT1(ownedPartsAutoclickersT1 + n)
  };
  const addPartsAutoclickersT2 = n => {
    setownedPartsAutoclickersT2(ownedPartsAutoclickersT2 + n)
  };
  const addPartsAutoclickersT3 = n => {
    setownedPartsAutoclickersT3(ownedPartsAutoclickersT3 + n)
  };
  const reduceParts = n => setParts(parts - n);


  const partsPerTick = 
    ownedPartsAutoclickersT1 * partsAutoclickers.t1.productionBase 
    + ownedPartsAutoclickersT2 * partsAutoclickers.t2.productionBase
    + ownedPartsAutoclickersT3 * partsAutoclickers.t3.productionBase;
  

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
      <Shop resources={{
              parts: parts
            }}
            ownedAutoclickers={{
              partsT1: ownedPartsAutoclickersT1,
              partsT2: ownedPartsAutoclickersT2,
              partsT3: ownedPartsAutoclickersT3
            }}
            addPartsAutoclickersT1={addPartsAutoclickersT1}
            addPartsAutoclickersT2={addPartsAutoclickersT2}
            addPartsAutoclickersT3={addPartsAutoclickersT3}
            reduceParts={reduceParts}
      />
    </div>
  );
}
 
export default Game;
