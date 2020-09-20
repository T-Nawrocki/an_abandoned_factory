import React, { useState, useEffect } from 'react';
import ShopItem from '../components/ShopItem';
import StoryUpgrade from '../components/StoryUpgrade';
import { partsAutoclickers } from '../data/PartsAutoclickers' 
import { inspirationAutoclickers } from '../data/InspirationAutoclickers'
import { storyStages } from '../data/StoryStages'
import "../styles/Shop.scss"

const Shop = (props) => {

  // Destructuring for useEffect
  const displayThreshold = props.displayThreshold;
  const parts = props.resources.parts;
  const inspiration = props.resources.inspiration;
  const storyStage = props.storyStage;

  const [showPartsT2, setShowPartsT2] = useState(false);
  const [showPartsT3, setShowPartsT3] = useState(false);
  const [showPartsT4, setShowPartsT4] = useState(false);
  const [showInspirationT1, setShowInspirationT1] = useState(false);
  const [showInspirationT2, setShowInspirationT2] = useState(false);
  const [showInspirationT3, setShowInspirationT3] = useState(false);
  const [showInspirationT4, setShowInspirationT4] = useState(false);
  const [showStoryUpgrade, setShowStoryUpgrade] = useState(false);

  useEffect(() => {
    if (parts >= partsAutoclickers.t2.costBase * displayThreshold) setShowPartsT2(true);
    if (parts >= partsAutoclickers.t3.costBase * displayThreshold) setShowPartsT3(true);
    if (parts >= partsAutoclickers.t4.costBase * displayThreshold) setShowPartsT4(true);
    if (parts >= inspirationAutoclickers.t1.costBase * displayThreshold) setShowInspirationT1(true);
    if (parts >= inspirationAutoclickers.t2.costBase * displayThreshold) setShowInspirationT2(true);
    if (parts >= inspirationAutoclickers.t3.costBase * displayThreshold) setShowInspirationT3(true);
    if (parts >= inspirationAutoclickers.t4.costBase * displayThreshold) setShowInspirationT4(true);
    if ( 
      !showStoryUpgrade &&
      parts >= storyStages[storyStage].partsCost * displayThreshold &&
      inspiration >= storyStages[storyStage].inspirationCost * displayThreshold
    ) setShowStoryUpgrade(true);
  }, [displayThreshold, parts, inspiration, showStoryUpgrade, storyStage]);

  return (
    <div id="shop">

      <div id="shop-parts-autoclickers">
        <ShopItem
          id="parts-autoclicker-t1"
          autoclicker={partsAutoclickers.t1}
          costResourceOwned={props.resources.parts}
          itemOwned={props.ownedAutoclickers.partsT1}
          addAutoclickers={props.addPartsAutoclickersT1}
          reduceResource={props.reduceParts}
        />
        { showPartsT2 &&
          <ShopItem
            id="parts-autoclicker-t2"
            autoclicker={partsAutoclickers.t2}
            costResourceOwned={props.resources.parts}
            itemOwned={props.ownedAutoclickers.partsT2}
            addAutoclickers={props.addPartsAutoclickersT2}
            reduceResource={props.reduceParts}
          />
        }
        { showPartsT3 &&
          <ShopItem
            id="parts-autoclicker-t3"
            autoclicker={partsAutoclickers.t3}
            costResourceOwned={props.resources.parts}
            itemOwned={props.ownedAutoclickers.partsT3}
            addAutoclickers={props.addPartsAutoclickersT3}
            reduceResource={props.reduceParts}
          />
        }
        { showPartsT4 &&
          <ShopItem
            id="parts-autoclicker-t4"
            autoclicker={partsAutoclickers.t4}
            costResourceOwned={props.resources.parts}
            itemOwned={props.ownedAutoclickers.partsT4}
            addAutoclickers={props.addPartsAutoclickersT4}
            reduceResource={props.reduceParts}
          />
        }
      </div>

      <div id="shop-inspiration-autoclickers">
        { showInspirationT1 &&
          <ShopItem
            id="inspiration-autoclicker-t1"
            autoclicker={inspirationAutoclickers.t1}
            costResourceOwned={props.resources.parts}
            itemOwned={props.ownedAutoclickers.inspirationT1}
            addAutoclickers={props.addInspirationAutoclickersT1}
            reduceResource={props.reduceParts}
          />
        }
        { showInspirationT2 &&
          <ShopItem
            id="inspiration-autoclicker-t2"
            autoclicker={inspirationAutoclickers.t2}
            costResourceOwned={props.resources.parts}
            itemOwned={props.ownedAutoclickers.inspirationT2}
            addAutoclickers={props.addInspirationAutoclickersT2}
            reduceResource={props.reduceParts}
          />
        }
        { showInspirationT3 &&
          <ShopItem
            id="inspiration-autoclicker-t3"
            autoclicker={inspirationAutoclickers.t3}
            costResourceOwned={props.resources.parts}
            itemOwned={props.ownedAutoclickers.inspirationT3}
            addAutoclickers={props.addInspirationAutoclickersT3}
            reduceResource={props.reduceParts}
          />
        }
        { showInspirationT4 &&
          <ShopItem
            id="inspiration-autoclicker-t4"
            autoclicker={inspirationAutoclickers.t4}
            costResourceOwned={props.resources.parts}
            itemOwned={props.ownedAutoclickers.inspirationT4}
            addAutoclickers={props.addInspirationAutoclickersT4}
            reduceResource={props.reduceParts}
          />
        }
      </div>

      <div id="shop-story-upgrades">
        { showStoryUpgrade &&
          props.storyStage < storyStages.length &&  // do not render after final stage
          <StoryUpgrade 
            storyStage={props.storyStage}
            partsOwned={props.resources.parts}
            inspirationOwned={props.resources.inspiration}
            reduceParts={props.reduceParts}
            reduceInspiration={props.reduceInspiration}
            progressStory={props.progressStory}
          />
        }
      </div>
    </div>
  );
}
 
export default Shop;
