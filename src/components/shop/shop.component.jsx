import React, {Component} from "react";
import CollectionsOverviewComponent from "../collections-overview/collections-overview.component";
import {Route} from "react-router-dom";
import CollectionComponent from "../collection/collection.component";
import {convertCollectionsSnapShotToMap, firestore} from "../../firebase/firebase.utils";
class ShopComponent extends Component{
    unSubscribe = null;
    componentDidMount() {
        const collectionRef = firestore.collection('collections')
        collectionRef.onSnapshot(snapShot=>{
            convertCollectionsSnapShotToMap(snapShot);
        })
    }

    render = ()=> {
        const {match} = this.props;
        return (<div className={"shop-page"}>
            <Route path={match.path} component={CollectionsOverviewComponent} exact/>
            <Route path={`${match.path}/:collectionId`} component={CollectionComponent} exact/>
        </div>);
    }

}

export default ShopComponent;