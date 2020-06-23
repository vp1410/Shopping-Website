import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
);

// Find collection.id matching to the url parameter of our collection.id map
export const selectCollection = collectionUrlParam => 
    createSelector(
        [selectCollections],
        collections => 
            collections[collectionUrlParam]
    );