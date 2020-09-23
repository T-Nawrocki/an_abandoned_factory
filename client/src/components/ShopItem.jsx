import React from 'react';
import { scaled } from '../helpers/CostScaling';
import '../styles/ShopItem.scss';

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
      <div className={canAfford ? "shop-item-button" : "shop-item-button disabled-button"}
           onClick={buy}>
        Build {name}
      </div>
      <div className="shop-item-detail">
        <b>Owned:</b> {props.itemOwned.toLocaleString(undefined)}
      </div>
      <div className="shop-item-detail">
        <b>Cost:</b> {costModified.toLocaleString(undefined)} {costResource}
      </div>
      <div className="shop-item-detail">
        <b>Production:</b> {productionModified.toLocaleString(undefined)} {productionResource} per tick
      </div>
    </div>
  );
}
 
export default ShopItem;
