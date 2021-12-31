import React from "react";
import './collections-overview.styles.jsx.scss';
import PreviewCollectionComponent from "../preview-collection/preview-collection.component";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import selectCollections from "../../redux/shop/shop.selectors";
const collectionsOverviewComponent = ({collections}) => (
    <div>
        {collections.map(({id, ...otherCollectionProps}) => (

            <PreviewCollectionComponent key={id} {...otherCollectionProps}/>

        ))}
    </div>
);
const mapStateToProps = createStructuredSelector(
    {
        collections:selectCollections
    }
);
export default connect(mapStateToProps)(collectionsOverviewComponent);