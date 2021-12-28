import React from 'react';
import './cart-icon.styles.scss';
import {toggleCartHidden} from "../../redux/cart/cart.actions";
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {connect} from "react-redux";
import cartItem from "../cart-item/cart-item.component";

const cartIcon = ({toggleCartHidden,totalItems})=>(
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className={"shopping-icon"}/>
        <span className="item-count">
            {totalItems}
        </span>
    </div>

);
const mapDispatchToProps = dispatch=>({
    toggleCartHidden:()=> dispatch(toggleCartHidden())
})
const mapStateToProps = ({cart:cartItems})=>({
    totalItems: cartItems.reduce((total,cartItem)=> total + cartItem.quantity,0)
});
export default connect(mapStateToProps,mapDispatchToProps)(cartIcon);