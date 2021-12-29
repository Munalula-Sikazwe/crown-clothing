import React from 'react';
import CustomButtonComponent from "../custom-button/custom-button.component";
import './cart-dropdown.styles.scss';
import {connect} from "react-redux";
import CartItemComponent from "../cart-item/cart-item.component";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";

const cartDropdownComponent = ({cartItems}) => (
    <div className="cart-dropdown">
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
        <CustomButtonComponent>
            GO TO CHECKOUT
        </CustomButtonComponent>
    </div>
);

const mapStateToProps = createStructuredSelector(
    {
        cartItems: selectCartItems
    }
);
export default connect(mapStateToProps)(cartDropdownComponent);