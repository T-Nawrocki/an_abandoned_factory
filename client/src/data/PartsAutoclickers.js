export const partsAutoclickers = [
  {
    name: "workstation",
    costResource: "parts",  // TODO replace magic strings with something better
    costBase: 50,
    productionResource: "parts",
    productionBase: 1
  },
  {
    name: "assembly line",
    costResource: "parts",
    costBase: 1000,
    productionResource: "parts",
    productionBase: 50
  },
  {
    name: "autofabricator",
    costResource: "parts",
    costBase: 20000,
    productionResource: "parts",
    productionBase: 750
  }
]
