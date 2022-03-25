import React, { useEffect, useState } from 'react';

const Shoes = () => {
    const [shoes, setShoes] = useState([])

    useEffect(() => {
        fetch(`data.json`)
            .then(res => res.json())
            .then(data => setShoes(data))
    }, [])
    return (
        <div>
            <h1>Nike Bazar</h1>

        </div>
    );
};

export default Shoes;