export const partsAutoclickers = {
  t1: {
    name: "workstation",
    costResource: "parts",  // TODO replace magic strings with something better
    costBase: 50,
    productionResource: "parts",
    productionBase: 1
  },
  t2: {
    name: "assembly line",
    costResource: "parts",
    costBase: 1000,
    productionResource: "parts",
    productionBase: 50
  },
  t3: {
    name: "autofabricator",
    costResource: "parts",
    costBase: 20000,
    productionResource: "parts",
    productionBase: 750
  }
}
