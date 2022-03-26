import React, { useState } from 'react';
import Info from '../Info/Info';
import './Cart.css'

const Cart = ({ cart, removeToCart }) => {
    // console.log(cart);
    function getRandom(list) {
        // return list[Math.floor((Math.random()*list.length))];
        console.log(list[Math.floor((Math.random() * list.length))]);

    }


    return (
        <div className='cart'>
            <h3>Selected Shoes</h3>
            {
                cart.map(info => <Info key={info.id} info={info} ></Info>)
            }
            <button onClick={() => getRandom(cart)} className='btn-me'>CHOOSE 1 FOR ME</button>
            <button onClick={removeToCart} className='btn-again'>CHOOSE AGAIN</button>

        </div>
    );
};


export default Cart;