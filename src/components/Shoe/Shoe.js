import React from 'react';
import './Shoe.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

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
                <p className='btn-text'> Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart} />


            </button>

        </div>
    );
};

export default Shoe;