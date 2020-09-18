import React from 'react';

const ResourceTracker = (props) => {
  return (
    <div id="resource-tracker">
      <ul>
        <li id="parts-tracker">
          Parts {props.parts}
        </li>
        <li id="inspiration-tracker">
          Inspiration {props.inspiration}
        </li>
      </ul>
    </div>
  );
}
 
export default ResourceTracker;
