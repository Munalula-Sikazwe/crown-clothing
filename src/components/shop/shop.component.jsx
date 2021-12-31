import React from "react";
import PreviewCollectionComponent from "../preview-collection/preview-collection.component";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import {connect} from "react-redux";

const shopComponent = ({collections}) =>
    (<div className={"shop-page"}>
        {collections.map(({id, ...otherCollectionProps}) => (

            <PreviewCollectionComponent key={id} {...otherCollectionProps}/>

        ))}
    </div>)


export default connect(mapStateToProps)(shopComponent);