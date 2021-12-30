import React from 'react';
import './checkout-item.styles.scss';
import {clearCart} from "../../redux/cart/cart.actions";
import {connect} from "react-redux";

const checkoutItem = ({cartItem,clearCart}) => {
    const handleClear = ()=>clearCart(cartItem);
    const {name,imageUrl,quantity,price} =cartItem;
    return (
        <div className={"checkout-item"}>
            <div className="image-container">
                <img src={imageUrl} alt={"item"}/>
            </div>
            <span className="name">
{name}
        </span>
            <span className="quantity">
{quantity}
        </span>
            <span className="price">
{price}
        </span>
            <div className="remove-button" onClick={handleClear}>
                &#10005;
            </div>
        </div>
    );
}
const mapDispatchToProps = dispatch=>({
    clearCart: item=> dispatch(clearCart(item))
});
export default connect(null,mapDispatchToProps)(checkoutItem);
