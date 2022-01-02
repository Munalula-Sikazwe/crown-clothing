import React from 'react';
import StripeCheckout from "react-stripe-checkout";

const stripeCheckoutButton = ({price})=>{
    const priceForStripe = price * 100;
    const PUBLISHABLE_KEY = 'pk_test_51KDX8IBtMR7LvFCIibYrcvufNmjVgzXyU0wuQr0rj9AStcWwI5igZM1vbf0z73nBJ7NJlSKmdd2AnlW5y6MSpRuK009QTFT002'
    return(
        <StripeCheckout label={"Pay Now"}
                        name={'Crown Clothing Limited'}
        image={"https://svgshare.com/i/CUz.svg"}
                        description={`Your total amount is $${price}`}
                        amount={priceForStripe}
                        panelLabel={"Pay Now"}
                        stripeKey={PUBLISHABLE_KEY}
        />
    )
};

export default StripeCheckout;