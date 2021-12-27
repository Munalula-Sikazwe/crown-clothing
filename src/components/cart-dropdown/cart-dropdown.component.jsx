import React from 'react';
import CustomButtonComponent from "../custom-button/custom-button.component";
import './cart-dropdown.styles.scss';

const cartDropdownComponent = () => (
    <div className="cart-dropdown">
        <div className="cart-items"/>
        <CustomButtonComponent>
            GO TO CHECKOUT
        </CustomButtonComponent>
    </div>
);

export default cartDropdownComponent;