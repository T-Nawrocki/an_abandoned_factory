import React, { useState, useEffect } from 'react';
import { inspirationAutoclickers } from '../data/InspirationAutoclickers' 

const ResourceTracker = (props) => {
  
  // destructuring for useeffect
  const parts = props.parts; 
  const displayThreshold = props.displayThreshold;

  const [showInspiration, setShowInspiration] = useState(false);

  // enable inspiration display
  useEffect(() => {
    if (parts >= inspirationAutoclickers.t1.costBase * displayThreshold) setShowInspiration(true);
  }, [parts, displayThreshold]);

  return (
    <div id="resource-tracker">
      <ul>
        <li id="parts-tracker">
          Parts { props.parts.toLocaleString(undefined) }
        </li>
        { showInspiration &&
          <li id="inspiration-tracker">
            Inspiration { props.inspiration.toLocaleString(undefined) }
          </li>
        }
      </ul>
    </div>
  );
}
 
export default ResourceTracker;
