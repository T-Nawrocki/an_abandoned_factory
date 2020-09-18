import React from 'react';
import { scaled } from '../helpers/CostScaling'

const ShopItem = (props) => {

  const name = props.autoclicker.name;
  const costBase = props.autoclicker.costBase;
  const costResource = props.autoclicker.costResource;
  const productionBase = props.autoclicker.productionBase;
  const productionResource = props.autoclicker.productionResource;

  const productionModified = productionBase; // TODO

  const costModified = scaled(costBase, props.owned); // TODO
  const canAfford = props.resource >= costModified;

  const buy = () => {
    if (!canAfford) return;
    props.reduceResource(costModified);
    props.addAutoclickers(1);
  }

  return (
    <div className="shop-item">
      <button onClick={buy} disabled={!canAfford}>
        Buy {name}
      </button>
      <div className="shop-item-owned">
        <b>Owned:</b> {props.owned}
      </div>
      <div className="shop-item-cost">
        <b>Cost:</b> {costModified} {costResource}
      </div>
      <div className="shop-item-production">
        <b>Production:</b> {productionModified} {productionResource} per tick
      </div>
    </div>
  );
}
 
export default ShopItem;