import React from 'react';
import { scaled } from '../helpers/CostScaling'

const ShopItem = (props) => {

  const name = props.autoclicker.name;
  const costBase = props.autoclicker.costBase;
  const costResource = props.autoclicker.costResource;
  const productionBase = props.autoclicker.productionBase;
  const productionResource = props.autoclicker.productionResource;

  const productionModified = productionBase;
  
  const costModified = scaled(costBase, props.itemOwned);
  const canAfford = props.costResourceOwned >= costModified;

  const buy = () => {
    if (!canAfford) return;
    props.reduceResource(costModified);
    props.addAutoclickers(1);
  };

  return (
    <div className="shop-item">
      <button onClick={buy} disabled={!canAfford}>
        Build {name}
      </button>
      <div className="shop-item-owned">
        <b>Owned:</b> {props.itemOwned.toLocaleString(undefined)}
      </div>
      <div className="shop-item-cost">
        <b>Cost:</b> {costModified.toLocaleString(undefined)} {costResource}
      </div>
      <div className="shop-item-production">
        <b>Production:</b> {productionModified.toLocaleString(undefined)} {productionResource} per tick
      </div>
    </div>
  );
}
 
export default ShopItem;
