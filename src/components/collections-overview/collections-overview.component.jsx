import React from "react";
import './collections-overview.styles.jsx.scss';
import PreviewCollectionComponent from "../preview-collection/preview-collection.component";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCollectionsForPreview} from "../../redux/shop/shop.selectors";

const collectionsOverviewComponent = ({collections}) => (
    <div>
        {collections.map(({id, ...otherCollectionProps}) => (

            <PreviewCollectionComponent key={id} {...otherCollectionProps}/>

        ))}
    </div>
);
const mapStateToProps = createStructuredSelector(
    {
        collections: selectCollectionsForPreview
    }
);
export default connect(mapStateToProps)(collectionsOverviewComponent);