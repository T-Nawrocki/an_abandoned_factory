import React, { useState, useEffect } from 'react';
import '../styles/StoryDisplay.scss';

const StoryDisplay = (props) => {
  
  const newText = props.newText;
  const [display, setDisplay] = useState("");

  // const type = text => {
  //   const typingSpeed = 100;



    // let i = 0;
    // while (i < text.length) {
    //   setDisplay(display + text[i]);
    //   i++;
    // }

    // for (let i = 0; i < text.length; i++) {
    //   const char = text[i];
    //   console.log('char :>> ', char);
    //   setTimeout(setDisplay(display + char), typingSpeed)
    // //   setDisplay(display + char);
    // }
  // };

  useEffect(() => {
    setDisplay(display + newText);
    // type(newText)
    // eslint-disable-next-line
  }, [newText]) 

  return (
    <div className="story-display">
      <div className="story-display-text">
        {display}
      </div>
    </div>
  );
}
 
export default StoryDisplay;
