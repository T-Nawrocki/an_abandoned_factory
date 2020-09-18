import React from 'react';
import ShopItem from '../components/ShopItem';
import { partsAutoclickers } from '../data/PartsAutoclickers' 

const Shop = (props) => {
  return (
    <div id="shop">
      <ShopItem
        id="parts-autoclicker-t1"
        autoclicker={partsAutoclickers.t1}
        resource={props.resources.parts}
        owned={props.ownedAutoclickers.partsT1}
        addAutoclickers={props.addPartsAutoclickersT1}
        reduceResource={props.reduceParts}
      />
      <ShopItem
        id="parts-autoclicker-t2"
        autoclicker={partsAutoclickers.t2}
        resource={props.resources.parts}
        owned={props.ownedAutoclickers.partsT2}
        addAutoclickers={props.addPartsAutoclickersT2}
        reduceResource={props.reduceParts}
      />
      <ShopItem
        id="parts-autoclicker-t3"
        autoclicker={partsAutoclickers.t3}
        resource={props.resources.parts}
        owned={props.ownedAutoclickers.partsT3}
        addAutoclickers={props.addPartsAutoclickersT3}
        reduceResource={props.reduceParts}
      />
    </div>
  );
}
 
export default Shop;
