import React from 'react';
import CustomButtonComponent from "../custom-button/custom-button.component";
import './cart-dropdown.styles.scss';
import {connect} from "react-redux";
import CartItemComponent from "../cart-item/cart-item.component";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";
import {withRouter} from "react-router-dom";

const cartDropdownComponent = ({cartItems, history}) => {
   const handleCheckout = ()=> history.push("/checkout")
    return (<div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                    cartItems.map(cartItem => (
                        <CartItemComponent key={cartItem.id} item={cartItem}/>
                    ))
                    :
                    <span className="empty-message">
                    Your cart is empty.
                        </span>
            }
        </div>
        <CustomButtonComponent onClick={handleCheckout}>
            GO TO CHECKOUT
        </CustomButtonComponent>
    </div>);
}


const mapStateToProps = createStructuredSelector(
    {
        cartItems: selectCartItems
    }
);
export default withRouter(connect(mapStateToProps)(cartDropdownComponent));