import React from 'react';
import './checkout-item.styles.scss';
import {clearCart} from "../../redux/cart/cart.actions";
import {connect} from "react-redux";
import {addItem,removeItem} from "../../redux/cart/cart.actions";
const checkoutItem = ({cartItem, clearCart,addItem,removeItem}) => {
    const handleClear = () => clearCart(cartItem);
    const handleAdd = ()=>addItem(cartItem);
    const handleRemove =()=> removeItem(cartItem);
    const {name, imageUrl, quantity, price} = cartItem;
    return (
        <div className={"checkout-item"}>
            <div className="image-container">
                <img src={imageUrl} alt={"item"}/>
            </div>
            <span className="name">
{name}
        </span>
            <span className="quantity">
                <div className="arrow" onClick={handleRemove}>&#10094;</div>

                <span className="value">
                {quantity}
                </span>
                <div className="arrow" onClick={handleAdd}>&#10095;</div>
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
const mapDispatchToProps = dispatch => ({
    clearCart: item => dispatch(clearCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});
export default connect(null, mapDispatchToProps)(checkoutItem);
