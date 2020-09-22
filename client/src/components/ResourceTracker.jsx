import React, { useState, useEffect } from 'react';
import { inspirationAutoclickers } from '../data/InspirationAutoclickers';
import '../styles/ResourceTracker.scss';

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
      <ul id="resource-tracker">
        <li className="resource-tracker-item">
          <div className="resource-tracker-item-name">Parts</div>
          <div className="resource-tracker-item-amount">
            { props.parts.toLocaleString(undefined) }
          </div>
        </li>
        { showInspiration &&
          <li className="resource-tracker-item">
            <div className="resource-tracker-item-name">Inspiration</div>
            <div className="resource-tracker-item-amount">
            { props.inspiration.toLocaleString(undefined) }
            </div>
          </li>
        }
      </ul>
  );
}
 
export default ResourceTracker;
