import React, { useState, useEffect } from 'react';
import StoryDisplay from '../components/StoryDisplay';
import ResourceTracker from '../components/ResourceTracker';
import MainButton from '../components/MainButton';
import Shop from './Shop';
import { partsAutoclickers } from '../data/PartsAutoclickers'
import { inspirationAutoclickers } from '../data/InspirationAutoclickers'
import { storyStages } from '../data/StoryStages'
import { storyText } from '../data/StoryText'

const Game = (props) => {
  
  const winGame = props.winGame; // destructuring for use in useEffect

  // Elements will display when player has this fraction of the resources needed
  const displayThreshold = 0.75 

  // State hooks
  const [introComplete, setIntroComplete] = useState(false);
  const [showShop, setShowShop] = useState(false);
  const [storyStage, setStoryStage] = useState(0)
  const [newStoryText, setNewStoryText] = useState("");
  const [tickSpeed, setTickSpeed] = useState(1000)
  const [parts, setParts] = useState(0);
  const [inspiration, setInspiration] = useState(0);
  const [ownedPartsAutoclickersT1, setOwnedPartsAutoclickersT1] = useState(0);
  const [ownedPartsAutoclickersT2, setOwnedPartsAutoclickersT2] = useState(0);
  const [ownedPartsAutoclickersT3, setOwnedPartsAutoclickersT3] = useState(0);
  const [ownedPartsAutoclickersT4, setOwnedPartsAutoclickersT4] = useState(0);
  const [ownedInspirationAutoclickersT1, setOwnedInspirationAutoclickersT1] = useState(0);
  const [ownedInspirationAutoclickersT2, setOwnedInspirationAutoclickersT2] = useState(0);
  const [ownedInspirationAutoclickersT3, setOwnedInspirationAutoclickersT3] = useState(0);
  const [ownedInspirationAutoclickersT4, setOwnedInspirationAutoclickersT4] = useState(0);


  // Pay Resources
  const reduceParts = n => setParts(parts - n);
  const reduceInspiration = n => setInspiration(inspiration - n);

  // Add Autoclickers
  const addPartsAutoclickersT1 = n => {
    setOwnedPartsAutoclickersT1(ownedPartsAutoclickersT1 + n);
  };
  const addPartsAutoclickersT2 = n => {
    setOwnedPartsAutoclickersT2(ownedPartsAutoclickersT2 + n);
  };
  const addPartsAutoclickersT3 = n => {
    setOwnedPartsAutoclickersT3(ownedPartsAutoclickersT3 + n);
  };
  const addPartsAutoclickersT4 = n => {
    setOwnedPartsAutoclickersT4(ownedPartsAutoclickersT4 + n);
  };
  const addInspirationAutoclickersT1 = n => {
    setOwnedInspirationAutoclickersT1(ownedInspirationAutoclickersT1 + n);
  };
  const addInspirationAutoclickersT2 = n => {
    setOwnedInspirationAutoclickersT2(ownedInspirationAutoclickersT2 + n);
  };
  const addInspirationAutoclickersT3 = n => {
    setOwnedInspirationAutoclickersT3(ownedInspirationAutoclickersT3 + n);
  };
  const addInspirationAutoclickersT4 = n => {
    setOwnedInspirationAutoclickersT4(ownedInspirationAutoclickersT4 + n);
  };

  // Other gameplay methods
  const handleMainButtonClick = () => setParts(parts + 1);
  const progressStory = () => setStoryStage(storyStage + 1)


  //Resources per tick
  const partsPerTick = 
    ownedPartsAutoclickersT1 * partsAutoclickers.t1.productionBase 
    + ownedPartsAutoclickersT2 * partsAutoclickers.t2.productionBase
    + ownedPartsAutoclickersT3 * partsAutoclickers.t3.productionBase
    + ownedPartsAutoclickersT4 * partsAutoclickers.t4.productionBase;
  const inspirationPerTick = 
    ownedInspirationAutoclickersT1 * inspirationAutoclickers.t1.productionBase
    + ownedInspirationAutoclickersT2 * inspirationAutoclickers.t2.productionBase
    + ownedInspirationAutoclickersT3 * inspirationAutoclickers.t3.productionBase
    + ownedInspirationAutoclickersT4 * inspirationAutoclickers.t4.productionBase
  

  // GameTick
  useEffect(() => {
    const interval = setInterval(() => {
      setParts(parts + partsPerTick);
      setInspiration(inspiration + inspirationPerTick);
    }, tickSpeed)
    return () => clearInterval(interval);  // clears interval during cleanup
  }, [parts, partsPerTick, inspiration, inspirationPerTick, tickSpeed]);

  // intro
  useEffect(() => {
    if (!introComplete) {
      setNewStoryText(storyText.intro);
      const timeout = setTimeout(() => {
        setIntroComplete(true);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, []);

  // enable shop display
  useEffect(() => {
    if (parts >= partsAutoclickers.t1.costBase * displayThreshold) setShowShop(true);
  }, [parts]);
  
  // win game on final story stage
  useEffect(() => {
    if (storyStage === storyStages.length) winGame()
  }, [storyStage, winGame]);


  return (
    <div id="game-container">
      <StoryDisplay newText={newStoryText}/>
      {introComplete && 
        <>
          <ResourceTracker parts={parts} 
                           inspiration={inspiration}
                           displayThreshold={displayThreshold} 
          />
          <MainButton handleMainButtonClick={handleMainButtonClick} />
          { showShop &&
            <Shop displayThreshold={displayThreshold}
                  storyStage={storyStage}
                  resources={{
                    parts: parts,
                    inspiration: inspiration
                  }}
                  ownedAutoclickers={{
                    partsT1: ownedPartsAutoclickersT1,
                    partsT2: ownedPartsAutoclickersT2,
                    partsT3: ownedPartsAutoclickersT3,
                    partsT4: ownedPartsAutoclickersT4,
                    inspirationT1: ownedInspirationAutoclickersT1,
                    inspirationT2: ownedInspirationAutoclickersT2,
                    inspirationT3: ownedInspirationAutoclickersT3,
                    inspirationT4: ownedInspirationAutoclickersT4
                  }}

                  addPartsAutoclickersT1={addPartsAutoclickersT1}
                  addPartsAutoclickersT2={addPartsAutoclickersT2}
                  addPartsAutoclickersT3={addPartsAutoclickersT3}
                  addPartsAutoclickersT4={addPartsAutoclickersT4}
                  addInspirationAutoclickersT1={addInspirationAutoclickersT1}
                  addInspirationAutoclickersT2={addInspirationAutoclickersT2}
                  addInspirationAutoclickersT3={addInspirationAutoclickersT3}
                  addInspirationAutoclickersT4={addInspirationAutoclickersT4}
                  reduceParts={reduceParts}
                  reduceInspiration={reduceInspiration}
                  progressStory={progressStory}
            />
          }
        </>
      }
    </div>
  );
}
 
export default Game;
