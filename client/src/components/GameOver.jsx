import React from 'react';
import { storyText } from '../data/StoryText'

const GameOver = (props) => {
  return (
    <div id="game-over">
      
      <div className="story-display">
        <div className="story-display-text">
          {storyText.winGame}
        </div>
      </div>
      
      <div id="restart-button" className="main-button" onClick={props.restart}>
        <div className="main-button-circle" />
        <div className="main-button-label">Return to the Factory</div>
      </div>

    </div>
  );
}
 
export default GameOver;
