import React from 'react';
import "./preview-collection.styles.scss";
import CollectionItemComponent from "../collection-item/collection-item.component";
import {Link, useLocation} from "react-router-dom";

const PreviewCollectionComponent = ({title,items})=>{
    const collectionLink = useLocation()
    return(
        <div className={"collection-preview"}>
            <Link to={`${collectionLink.pathname}/${title.toLowerCase()}`}>
                <h1 className={"title"} >
                    {title.toUpperCase()}
                </h1>
            </Link>

            <div className={"preview"}>
                {items.filter((item,idx) => idx < 4).map((item) =>(

                    <CollectionItemComponent key={item.id} item={item}/>
                ))}
            </div>
        </div>
    )
}


export default PreviewCollectionComponent;