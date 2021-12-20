import React from 'react';
import "./preview-collection.styles.scss";

const previewCollectionComponent = ({title})=>(
    <div className={"collection-preview"}>
        <h1 className={"title"}>
            {title}
        </h1>
        <div className={"preview"}>

        </div>
    </div>
)

export default previewCollectionComponent;