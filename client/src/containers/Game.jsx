import React, { useState, useEffect } from 'react';
import MainButton from '../components/MainButton';
import ResourceTracker from '../components/ResourceTracker';
import Shop from './Shop';
import { partsAutoclickers } from '../data/PartsAutoclickers'
import { inspirationAutoclickers } from '../data/InspirationAutoclickers'

const Game = () => {

  const [tickSpeed, setTickSpeed] = useState(1000)
  const [parts, setParts] = useState(0);
  const [inspiration, setInspiration] = useState(0);
  const [ownedPartsAutoclickersT1, setOwnedPartsAutoclickersT1] = useState(0);
  const [ownedPartsAutoclickersT2, setOwnedPartsAutoclickersT2] = useState(0);
  const [ownedPartsAutoclickersT3, setOwnedPartsAutoclickersT3] = useState(0);
  const [ownedInspirationAutoclickersT1, setOwnedInspirationAutoclickersT1] = useState(0);
  const [ownedInspirationAutoclickersT2, setOwnedInspirationAutoclickersT2] = useState(0);
  const [ownedInspirationAutoclickersT3, setOwnedInspirationAutoclickersT3] = useState(0);
  const [ownedInspirationAutoclickersT4, setOwnedInspirationAutoclickersT4] = useState(0);


  const reduceParts = n => setParts(parts - n);
  const reduceInspiration = n => setInspiration(inspiration - n);

  const addPartsAutoclickersT1 = n => {
    setOwnedPartsAutoclickersT1(ownedPartsAutoclickersT1 + n);
  };
  const addPartsAutoclickersT2 = n => {
    setOwnedPartsAutoclickersT2(ownedPartsAutoclickersT2 + n);
  };
  const addPartsAutoclickersT3 = n => {
    setOwnedPartsAutoclickersT3(ownedPartsAutoclickersT3 + n);
  };
  

  const handleMainButtonClick = () => setParts(parts + 1);


  const partsPerTick = 
    ownedPartsAutoclickersT1 * partsAutoclickers.t1.productionBase 
    + ownedPartsAutoclickersT2 * partsAutoclickers.t2.productionBase
    + ownedPartsAutoclickersT3 * partsAutoclickers.t3.productionBase;
  const inspirationPerTick = 
    ownedInspirationAutoclickersT1 * inspirationAutoclickers.t1.productionBase
    + ownedInspirationAutoclickersT2 * inspirationAutoclickers.t2.productionBase
    + ownedInspirationAutoclickersT3 * inspirationAutoclickers.t3.productionBase
    + ownedInspirationAutoclickersT4 * inspirationAutoclickers.t4.productionBase
  

  // GameTick
  useEffect(() => {
    const interval = setInterval(() => {
      setParts(parts + partsPerTick)
    }, tickSpeed)
    return () => clearInterval(interval);  // clears interval during cleanup
  }, [parts, partsPerTick, tickSpeed]);


  return (
    <div id="game-container">
      <ResourceTracker parts={parts} inspiration={inspiration} />
      <MainButton handleMainButtonClick={handleMainButtonClick} />
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
