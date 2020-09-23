import React, { useState, useEffect } from 'react';
import '../styles/StoryDisplay.scss';

const StoryDisplay = (props) => {
  
  const newText = props.newText;
  const [display, setDisplay] = useState("");
  const typingSpeed = 50;

  useEffect(() => {
    if (display.length === newText.length) return;
    const timeout = setTimeout(() => {
      setDisplay(display + newText[display.length]);
    }, typingSpeed);
    return () => clearInterval(timeout);
  }, [newText, display]) 

  return (
    <div className="story-display">
      <div className="story-display-text">
        {display}
      </div>
    </div>
  );
}
 
export default StoryDisplay;
