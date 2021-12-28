import React from 'react';
import CustomButtonComponent from "../custom-button/custom-button.component";
import './cart-dropdown.styles.scss';
import {connect} from "react-redux";
import CartItemComponent from "../cart-item/cart-item.component";

const cartDropdownComponent = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(cartItem=>(
                    <CartItemComponent key={cartItem.id} item={cartItem}/>
                ))
            }
        </div>
        <CustomButtonComponent>
            GO TO CHECKOUT
        </CustomButtonComponent>
    </div>
);

const mapStateToProps = ({cart: {cartItems}}) => (
    {
        cartItems
    }
    );
export default connect(mapStateToProps)(cartDropdownComponent);