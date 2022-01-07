import React, {Component} from "react";
import CollectionsOverviewComponent from "../collections-overview/collections-overview.component";
import {Route} from "react-router-dom";
import CollectionComponent from "../collection/collection.component";
import {convertCollectionsSnapShotToMap, firestore} from "../../firebase/firebase.utils";
import {updateCollections} from "../../redux/shop/shop.action";
import {connect} from "react-redux";
import WithSpinner from "../with-spinner/with-spinner";

const CollectionWithSpinner = WithSpinner(CollectionComponent);
const CollectionsOverViewWithSpinner = WithSpinner(CollectionsOverviewComponent);
class ShopComponent extends Component{
    state = {
        isLoading: true
    }
    unSubscribe = null;
    componentDidMount() {
        const {updateCollections} = this.props;

    }

    render = ()=> {
        const {match} = this.props;
        const {isLoading} = this.state;

        return (<div className={"shop-page"}>
            <Route path={match.path} render={(props)=><CollectionsOverViewWithSpinner isLoading={isLoading} {...props}/>} exact/>
            <Route path={`${match.path}/:collectionId`} render={(props)=><CollectionWithSpinner isLoading={isLoading}{...props}/>} exact/>
        </div>);
    }

}
const mapDispatchToProps = dispatch => (
    {
        updateCollections:collectionsMap => dispatch(updateCollections(collectionsMap))
    }
);
export default connect(null,mapDispatchToProps)(ShopComponent);