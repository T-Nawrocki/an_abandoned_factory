import React from 'react';
import '../styles/MainButton.scss';

const MainButton = (props) => {
  
  return (
    <div id="main-button" onClick={props.handleMainButtonClick}>
      <div id="main-button-circle" />
      <div id="main-button-label">Build Parts</div>
    </div>
  );
}
 
export default MainButton;
