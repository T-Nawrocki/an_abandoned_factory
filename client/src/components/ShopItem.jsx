import React from 'react';

const ShopItem = (props) => {

  const name = props.details.name;
  const costBase = props.details.costBase;
  const costResource = props.details.costResource;

  const costModified = costBase; // TODO
  const canAfford = props.resource >= costModified;

  const buy = () => {
    if (!canAfford) return;
    props.reduceResource(costModified);
    props.addClickers(1);
  }

  return (
    <div className="shop-item">
      <div className="shop-item-owned">
        <b>Owned:</b> {props.owned}
      </div>
      <div className="shop-item-cost">
        <b>Cost:</b> {costModified} {costResource}
      </div>
      <button onClick={buy} disabled={!canAfford}>
        Buy {name}
      </button>
    </div>
  );
}
 
export default ShopItem;
