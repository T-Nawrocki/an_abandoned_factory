import React from 'react';
import { storyStages } from '../data/StoryStages';

const StoryUpgrade = (props) => {

  const name = storyStages[props.storyStage].name;
  const partsCost = storyStages[props.storyStage].partsCost;
  const inspirationCost = storyStages[props.storyStage].inspirationCost;

  const canAfford = props.partsOwned >= partsCost && props.inspirationOwned >= inspirationCost;

  const buy = () => {
    if (!canAfford) return;
    props.reduceParts(partsCost);
    props.reduceInspiration(inspirationCost);
    props.progressStory();
  };

  return (
    <div className="shop-item story-upgrade">
      <div className="shop-item-button"
           onClick={buy} 
           disabled={!canAfford}>
        {name}
      </div>
      { partsCost > 0 &&
        <div className="shop-item-detail">
          <b>Parts:</b> {partsCost.toLocaleString(undefined)}
        </div>
      }
      { inspirationCost > 0 &&
        <div className="shop-item-detail">
          <b>Inspiration:</b> {inspirationCost.toLocaleString(undefined)}
        </div>
      }
    </div>
  );
}
 
export default StoryUpgrade;
