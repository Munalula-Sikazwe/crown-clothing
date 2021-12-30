export const addItemsToCart = (cartItems, cartItemToAdd) => {

    const existingcartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
    if (existingcartItem) {
        return cartItems.map(
            cartItem => cartItem.id === cartItemToAdd.id ?
                {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
        );

    }
    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}

export const removeItemsFromCart = (cartItems, cartItemToRemove) => {
    const existingcartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);
    if (existingcartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    } else {
        return cartItems.map(
            cartItem => cartItem.id === cartItemToRemove.id ?
                {...cartItem, quantity: cartItem.quantity - 1}
                : cartItem
        );

    }
}