import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Shoe from '../Shoe/Shoe';
import './Shoes.css'

const Shoes = () => {
    const [shoes, setShoes] = useState([])
    const [cart, setCart] = useState([])


    useEffect(() => {
        fetch(`data.json`)
            .then(res => res.json())
            .then(data => setShoes(data))
    }, [])

    const handleAddToCart = (shoe) => {
        // console.log(shoe);
        const newCart = [...cart, shoe]
        setCart(newCart)
    }
    const removeToCart = () => {
        const cart = []
        setCart(cart)
    }


    return (
        <div>
            <h1 className='title'>Nike Bazar</h1>
            <h3 className='title-bottom'> Choose Your Favourite Shoes</h3>

            <div className="shoes-container">
                <div className="products-container">
                    {
                        shoes.map(shoe => <Shoe
                            key={shoe.id}
                            shoe={shoe}
                            handleAddToCart={handleAddToCart}

                        ></Shoe>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart} removeToCart={removeToCart}></Cart>
                </div>
            </div>

        </div>
    );
};

export default Shoes;