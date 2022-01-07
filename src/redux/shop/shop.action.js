import SHOP_ACTION_TYPES from "./shop.types";
import {convertCollectionsSnapShotToMap, firestore} from "../../firebase/firebase.utils";

export const fetchCollectisonsStart = () =>({
    type:SHOP_ACTION_TYPES.FETCH_COLLECTIONS_START,
});

export const fetchCollectisonsSuccess =collectionsMap =>({
    type:SHOP_ACTION_TYPES.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
});

export const fetchCollectisonsFailed = errorMessage =>({
    type:SHOP_ACTION_TYPES.FETCH_COLLECTIONS_FAILED,
    payload: errorMessage
})
export const fetchCollectonsStartAsync = () =>{
    return dispatch => {
        const collectionRef = firestore.collection('collections')
        dispatch(fetchCollectisonsStart())
        collectionRef.get().then(async snapShot=>{
            const collectionsMap = await convertCollectionsSnapShotToMap(snapShot);
            dispatch(fetchCollectisonsSuccess(collectionsMap))
        }).catch(error=>dispatch(fetchCollectisonsFailed(error.message)));
    }
}
