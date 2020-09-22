import React from 'react';
import '../styles/MainButton.scss';

const MainButton = (props) => {
  
  return (
    <div className="main-button" onClick={props.handleMainButtonClick}>
      <div className="main-button-circle" />
      <div className="main-button-label">Build Parts</div>
    </div>
  );
}
 
export default MainButton;
