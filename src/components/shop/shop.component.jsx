import React, {Component} from "react";
import CollectionsOverviewComponent from "../collections-overview/collections-overview.component";
import {Route} from "react-router-dom";
import CollectionComponent from "../collection/collection.component";
import {connect} from "react-redux";
import WithSpinner from "../with-spinner/with-spinner";
import {selectCollectionIsFetching, selectCollectionIsLoaded} from "../../redux/shop/shop.selectors";
import {createStructuredSelector} from "reselect";
import {fetchCollectonsStartAsync} from "../../redux/shop/shop.action";

const CollectionWithSpinner = WithSpinner(CollectionComponent);
const CollectionsOverViewWithSpinner = WithSpinner(CollectionsOverviewComponent);

class ShopComponent extends Component {


    componentDidMount() {
       const  {fetchCollectonsStartAsync} = this.props;
        fetchCollectonsStartAsync()
    }

    render = () => {
        const {match,isCollectionFetching} = this.props;


        return (<div className={"shop-page"}>
            <Route path={match.path}
                   render={(props) => <CollectionsOverViewWithSpinner isLoading={isCollectionFetching} {...props}/>} exact/>
            <Route path={`${match.path}/:collectionId`}
                   render={(props) => <CollectionWithSpinner isLoading={isCollectionFetching}{...props}/>} exact/>
        </div>);
    }

}

const mapDispatchToProps = dispatch => ({
    fetchCollectonsStartAsync: collectionsMap => dispatch(fetchCollectonsStartAsync(collectionsMap))
});
const mapStateToProps = createStructuredSelector(
    {
        isCollectionFetching: selectCollectionIsFetching,
        isCollectionLoading: selectCollectionIsLoaded
    }
)
export default connect(mapStateToProps, mapDispatchToProps)(ShopComponent);