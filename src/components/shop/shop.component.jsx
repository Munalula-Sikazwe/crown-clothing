import React from "react";
import PreviewCollectionComponent from "../preview-collection/preview-collection.component";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import selectCollections from "../../redux/shop/shop.selectors";

const shopComponent = ({collections}) =>
    (<div className={"shop-page"}>
        {collections.map(({id, ...otherCollectionProps}) => (

            <PreviewCollectionComponent key={id} {...otherCollectionProps}/>

        ))}
    </div>);

const mapStateToProps = createStructuredSelector(
    {
        collections:selectCollections
    }
);
export default connect(mapStateToProps)(shopComponent);