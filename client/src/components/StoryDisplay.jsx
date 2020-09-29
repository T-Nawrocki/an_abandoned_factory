import React, { useState, useEffect } from 'react';
import useTypewriter from '../hooks/useTypewriter';
import '../styles/StoryDisplay.scss';

const StoryDisplay = (props) => {

  const [display] = useTypewriter(props.newText, 50);

  return (
    <div id="main-story-display" className="story-display">
      <div className="story-display-text">
        {display}
      </div>
    </div>
  );
}
 
export default StoryDisplay;
