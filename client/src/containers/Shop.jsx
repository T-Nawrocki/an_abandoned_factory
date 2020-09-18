import React from 'react';
import ShopItem from '../components/ShopItem';
import { partsAutoclickers } from '../data/PartsAutoclickers' 

const Shop = (props) => {
  return (
    <div id="shop">
      <ShopItem
        id="parts-autoclicker-t1"
        details={partsAutoclickers.t1}
        parts={props.resources.parts}
        owned={props.ownedAutoclickers.partsT1}
        addClickers={props.addPartsAutoclickersT1}
        reduceResource={props.reduceParts}
      />
    </div>
  );
}
 
export default Shop;
