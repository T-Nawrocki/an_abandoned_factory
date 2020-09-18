import React from 'react';

const GameOver = (props) => {
  return (
    <div id="game-over">
      <h1>Game over</h1>
      <button onClick={props.restart}>Return to the Factory</button>
    </div>
  );
}
 
export default GameOver;
