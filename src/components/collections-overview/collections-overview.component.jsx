import React from "react";
import './collections-overview.styles.jsx.scss';
import PreviewCollectionComponent from "../preview-collection/preview-collection.component";


const collectionsOverviewComponent = ({collections})=>(
    <div>
        {collections.map(({id, ...otherCollectionProps}) => (

            <PreviewCollectionComponent key={id} {...otherCollectionProps}/>

        ))}
    </div>
);

export default collectionsOverviewComponent;