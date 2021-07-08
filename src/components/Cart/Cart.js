import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    // let totalpopulation = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const country = cart[i];
    //     totalpopulation = totalpopulation + country.population;
    // }

    const totalpopulation = cart.reduce((sum, country) => sum + country.population,0);
    return (
        <div>
            <h2>Cart length: {cart.length}</h2>
            <p>Total population: {totalpopulation}</p>
        </div>
    );
};

export default Cart;