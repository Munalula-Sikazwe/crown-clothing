import React from "react";
import './checkout.styles.scss';
import {createStructuredSelector} from "reselect";
import {selectCartItems, selectCartTotal} from "../../redux/cart/cart.selectors";
import {connect} from "react-redux";
import CheckoutItemComponent from "../../components/checkout-item/checkout-item.component";
import StripeButtonComponent from "../../components/stripe-button.component";

const checkoutPage = ({cartItems, priceTotal}) => (
    <div className={"checkout-page"}>
        <div className={"checkout-header"}>

            <div className={"header-block"}>
<span>
Product
</span>
            </div>
            <div className={"header-block"}>
<span>
Description
</span>
            </div>
            <div className={"header-block"}>
<span>
Quantity
</span>
            </div>
            <div className={"header-block"}>
<span>
Price
</span>
            </div>
            <div className={"header-block"}>
<span>
Remove
</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => (

                <CheckoutItemComponent key={cartItem.id} cartItem={cartItem}/>

            ))
        }
        <div className={"total"}>
            <span>Total : $ {priceTotal}</span>
        </div>
        <div className="test-warning">
            *Please use the test credit card for
            <br/>
            4242 4242 4242 4242 - Exp 04/22 CVV 123
        </div>
        <StripeButtonComponent price={priceTotal}/>
    </div>
);
const mapStateToProps = createStructuredSelector(
    {
        cartItems: selectCartItems,
        priceTotal: selectCartTotal
    }
)
export default connect(mapStateToProps)(checkoutPage);