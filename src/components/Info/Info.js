import React from 'react';
import './Info.css'

const Info = (props) => {

    return (
        <div className='info'>

            <img src={props.info.img} alt="" />
            <p className='info-text'>{props.info.name}</p>

        </div>
    );
};

export default Info;