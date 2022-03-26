import React, { useState } from 'react';
import Info from '../Info/Info';
import './Cart.css'

const Cart = ({ cart, removeToCart }) => {

    function getRandom(list) {
        let item = list[Math.floor((Math.random() * list.length))]
        alert(item.name + " is suitable for you")

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