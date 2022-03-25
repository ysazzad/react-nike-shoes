import React from 'react';
import './Shoe.css'

const Shoe = (props) => {
    // console.log(props.shoe);
    const { name, price, img } = props.shoe
    return (
        <div className='shoe'>
            <img src={img} alt="" />
            <div className="shoe-info">
                <h3> {name}</h3>
                <p> Price: ${price}</p>
            </div>
            <button className='btn-cart'>
                <p> Add to cart</p>
            </button>

        </div>
    );
};

export default Shoe;