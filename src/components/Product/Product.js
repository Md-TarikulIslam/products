import React from 'react';
import { Link} from 'react-router-dom';
import './Product.css'

const Product = ({product}) => {

    const {id, name, color, price, img} = product
    // console.log(id)
    return ( 
        <div className='single-product'>
          
            <h1>{name}</h1>
            <img className='pro-img' src={img} alt="" />
       
            <Link to={`/product/${id}`} className='btn' >Details</Link>
            
        </div>
    );
};

export default Product;