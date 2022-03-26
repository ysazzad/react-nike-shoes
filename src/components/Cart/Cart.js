import React from 'react';
import Info from '../Info/Info';
import './Cart.css'

const Cart = ({ cart }) => {
    console.log(cart);

    return (
        <div className='cart'>
            <h3>Selected Shoes</h3>

            {
                cart.map(info => <Info info={info}></Info>)
            }

        </div>
    );
};

export default Cart;