import React, { useState, useEffect } from 'react';

const StoryDisplay = (props) => {
  
  const newText = props.newText;
  const [display, setDisplay] = useState("");

  useEffect(() => {
    setDisplay(display + "\n\n"  + newText);
  }, [newText])

  return (
    <div id="story-display">
      {display}
    </div>
  );
}
 
export default StoryDisplay;
