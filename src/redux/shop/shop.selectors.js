import {createSelector} from "reselect";

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}
const selectShop = state => state.shop;
const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]);

export const selectCollectionsForPreview = createSelector(
    [selectCollection],
    collections => Object.keys(collections).map(key=>collections[key])
)

export default selectCollections;

