import IPublicUser from "../User/PublicUser";

export default interface IPublicListing {
  id: String;
  title: String;
  owner: IPublicUser;
  product: IPublicListingProduct;
}

interface IPublicListingProduct {
  image: {
    url: String;
    alt: String;
  };
  material: IListingMaterial;
  unit: IListingUnit;
  stock: IListingStock;
}

interface IListingMaterial {
  type: EnumMaterialType;
}

interface IListingUnit {
  priceInCents: Number;
  currency: EnumUnitCurrency;
  type: EnumUnitType;
  size: Number;
  shipping: IListingShipping;
}

interface IListingShipping {
  type: Number;
  averageCost: Number;
}

interface IListingStock {
  availableUnits: Number;
  minUnitsPerOrder: Number;
  maxUnitsPerOrder: Number;
}

enum EnumUnitType {
  VOLUME = 1,
  WEIGTH = 2,
}

enum EnumUnitCurrency {
  BRL = 1,
  USD = 2,
}

enum EnumMaterialType {
  GLASS = 1,
  PAPER = 2,
  PLASTIC = 3,
}
