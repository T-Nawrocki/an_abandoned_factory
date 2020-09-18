import React from 'react';
import ShopItem from '../components/ShopItem';
import { partsAutoclickers } from '../data/PartsAutoclickers' 
import { inspirationAutoclickers } from '../data/InspirationAutoclickers'
import "../styles/Shop.css"

const Shop = (props) => {
  return (
    <div id="shop">

      <div id="shop-parts-autoclickers">
        <ShopItem
          id="parts-autoclicker-t1"
          autoclicker={partsAutoclickers.t1}
          costResourceOwned={props.resources.parts}
          itemOwned={props.ownedAutoclickers.partsT1}
          addAutoclickers={props.addPartsAutoclickersT1}
          reduceResource={props.reduceParts}
        />
        <ShopItem
          id="parts-autoclicker-t2"
          autoclicker={partsAutoclickers.t2}
          costResourceOwned={props.resources.parts}
          itemOwned={props.ownedAutoclickers.partsT2}
          addAutoclickers={props.addPartsAutoclickersT2}
          reduceResource={props.reduceParts}
        />
        <ShopItem
          id="parts-autoclicker-t3"
          autoclicker={partsAutoclickers.t3}
          costResourceOwned={props.resources.parts}
          itemOwned={props.ownedAutoclickers.partsT3}
          addAutoclickers={props.addPartsAutoclickersT3}
          reduceResource={props.reduceParts}
        />
        <ShopItem
          id="parts-autoclicker-t4"
          autoclicker={partsAutoclickers.t4}
          costResourceOwned={props.resources.parts}
          itemOwned={props.ownedAutoclickers.partsT4}
          addAutoclickers={props.addPartsAutoclickersT4}
          reduceResource={props.reduceParts}
        />
      </div>

      <div id="shop-inspiration-autoclickers">
        <ShopItem
          id="inspiration-autoclicker-t1"
          autoclicker={inspirationAutoclickers.t1}
          costResourceOwned={props.resources.parts}
          itemOwned={props.ownedAutoclickers.inspirationT1}
          addAutoclickers={props.addInspirationAutoclickersT1}
          reduceResource={props.reduceParts}
        />
        <ShopItem
          id="inspiration-autoclicker-t2"
          autoclicker={inspirationAutoclickers.t2}
          costResourceOwned={props.resources.parts}
          itemOwned={props.ownedAutoclickers.inspirationT2}
          addAutoclickers={props.addInspirationAutoclickersT2}
          reduceResource={props.reduceParts}
        />
        <ShopItem
          id="inspiration-autoclicker-t3"
          autoclicker={inspirationAutoclickers.t3}
          costResourceOwned={props.resources.parts}
          itemOwned={props.ownedAutoclickers.inspirationT3}
          addAutoclickers={props.addInspirationAutoclickersT3}
          reduceResource={props.reduceParts}
        />
        <ShopItem
          id="inspiration-autoclicker-t4"
          autoclicker={inspirationAutoclickers.t4}
          costResourceOwned={props.resources.parts}
          itemOwned={props.ownedAutoclickers.inspirationT4}
          addAutoclickers={props.addInspirationAutoclickersT4}
          reduceResource={props.reduceParts}
        />

      </div>
    </div>
  );
}
 
export default Shop;
