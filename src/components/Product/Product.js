import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, color, price, img} = props.product
    return ( 
        <div className='single-product'>
            <h1>{name}</h1>
            <img className='pro-img' src={img} alt="" />
            <p>Color: {color}</p>
            <p>Price: {price} BDT</p>
        </div>
    );
};

export default Product;