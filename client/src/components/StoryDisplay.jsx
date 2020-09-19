import React, { useState, useEffect } from 'react';

const StoryDisplay = (props) => {
  
  const newText = props.newText;
  const [display, setDisplay] = useState("");

  useEffect(() => {
    setDisplay(...display, newText);
  }, [newText])

  return (
    <div id="story-display">
      <p>{display}</p>
    </div>
  );
}
 
export default StoryDisplay;
