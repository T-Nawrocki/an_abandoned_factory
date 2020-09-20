import React from 'react';
import { storyText } from '../data/StoryText'

const GameOver = (props) => {
  return (
    <div id="game-over">
      <div id="game-over-story-display">
        {storyText.winGame}
      </div>
      <div id="restart-pane">
        <h1>Game over</h1>
        <button onClick={props.restart}>Return to the Factory</button>
      </div>
      
    </div>
  );
}
 
export default GameOver;
