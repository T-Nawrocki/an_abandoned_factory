import React, { useState, useEffect } from 'react';
import '../styles/StoryDisplay.scss';

const StoryDisplay = (props) => {
  
  const newText = props.newText;
  const [display, setDisplay] = useState("");

  useEffect(() => {
    setDisplay(display + newText);
  }, [newText])

  return (
    <div id="story-display">
      <div id="story-display-text">
        {display}
      </div>
    </div>
  );
}
 
export default StoryDisplay;
