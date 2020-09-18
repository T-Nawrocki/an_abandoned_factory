import React, { useState, useEffect } from 'react';
import { storyText } from '../data/StoryText'

const StoryDisplay = (props) => {
  
  const setIntroComplete = props.setIntroComplete;  // destructuring for useEffect

  const [display, setDisplay] = useState("");
  const renderText = text => setDisplay(display + text)
  
  // Intro
  useEffect(() => {
    renderText(storyText.intro);
    setTimeout(() => setIntroComplete(true), 5000);  // duration of intro
  }, []);  // empty dependencies to prevent update


  return (
    <div id="story-display">
      <p>{display}</p>
    </div>
  );
}
 
export default StoryDisplay;
