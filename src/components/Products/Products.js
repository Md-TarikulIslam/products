import React from 'react';
import productData from '../../mockData/productData';
import Product from '../Product/Product';
import './Products.css'



const Products = () => {
    return (

        <div className='products-area'>

            {
                productData?.map(product => <Product
                    key={product?.id}
                    product={product}
                ></Product>)
            }

        </div>
    );
};

export default Products;