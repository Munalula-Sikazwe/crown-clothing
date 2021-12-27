import React from "react";
import './collection-item.component.scss';
import CustomButtonComponent from "../custom-button/custom-button.component";

const collectionItemComponent = ({id,name,price,imageUrl})=>(
<div className={"collection-item"}>
<div className={"image"}
        style={{backgroundImage:`url(${imageUrl})`}}
/>
<div className={"collection-footer"}>
    <span className={"name"}>{name}</span>
    <span className={"price"}>{price}</span>
</div>
    <CustomButtonComponent>
        Add to Cart
    </CustomButtonComponent>
</div>
);

export default collectionItemComponent;
