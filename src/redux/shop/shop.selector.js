import { createSelector } from "reselect";


const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  collections => Object.keys(collections).map(key => collections[key]) //gets the keys of the object that passed into and return in array format
)

export const selectCollection = collectionUrlParam =>
 createSelector(
   [selectShopCollections],
   collections => collections[collectionUrlParam]); //efficient way of mapping data object opposed to iterate through array