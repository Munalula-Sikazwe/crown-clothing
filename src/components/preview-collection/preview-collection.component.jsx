import React from 'react';
import "./preview-collection.styles.scss";
import CollectionItemComponent from "../collection-item/collection-item.component";
const previewCollectionComponent = ({title,items})=>(
    <div className={"collection-preview"}>
        <h1 className={"title"}>
            {title.toUpperCase()}
        </h1>
        <div className={"preview"}>
            {items.filter((item,idx) => idx < 4).map(({id,item}) =>(
                <CollectionItemComponent key={id} item/>
            ))}
        </div>
    </div>
)

export default previewCollectionComponent;