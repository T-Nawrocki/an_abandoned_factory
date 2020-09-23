import React from 'react';
import useTypewriter from '../hooks/useTypewriter';
import { storyText } from '../data/StoryText'

const GameOver = (props) => {

  const [display] = useTypewriter(storyText.winGame, 50)

  return (
    <div id="game-over">
      
      <div className="story-display">
        <div className="story-display-text">
          {display}
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
