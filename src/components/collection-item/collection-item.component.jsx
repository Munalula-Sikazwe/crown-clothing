import React from "react";
import './collection-item.component.scss';
import CustomButtonComponent from "../custom-button/custom-button.component";
import {connect} from "react-redux";
import {addItem} from "../../redux/cart/cart.actions";

const collectionItemComponent = ({item,addItem})=>{
    const {name,price,imageUrl} = item;
    return(
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
}

const mapDispatchToProps = dispatch => (
    {
        addItem: item => dispatch(addItem(item))
    }
);
export default connect(null,mapDispatchToProps)(collectionItemComponent);
