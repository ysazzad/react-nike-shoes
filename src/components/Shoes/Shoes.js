import React, { useEffect, useState } from 'react';
import Shoe from '../Shoe/Shoe';
import './Shoes.css'

const Shoes = () => {
    const [shoes, setShoes] = useState([])

    useEffect(() => {
        fetch(`data.json`)
            .then(res => res.json())
            .then(data => setShoes(data))
    }, [])
    return (
        <div>
            <h1 className='title'>Nike Bazar</h1>
            <div className="shoes-container">
                <div className="products-container">
                    {
                        shoes.map(shoe => <Shoe
                            key={shoe.id}
                            shoe={shoe}

                        ></Shoe>)
                    }
                </div>
                <div className="cart-container"> cart</div>
            </div>

        </div>
    );
};

export default Shoes;