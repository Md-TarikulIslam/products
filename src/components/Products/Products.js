import React from 'react';
import Product from '../Product/Product';
import './Products.css'


const allProducts = [
    {id: 1, name: 'iPhone 14 Pro Max', color: 'Purple', price: 145000, img:'https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907_inline.jpg.large.jpg'},
    {id: 2, name: 'iPhone 14', color: 'Blue', price: 95000, img:'https://media.wired.com/photos/6332360740fe1e8870aa3bc0/191:100/w_1280,c_limit/iPhone-14-Review-Gear.jpg'},
    {id: 3, name: 'Samsung S23 Ultra', color: 'Green', price: 120000, img:'https://images.samsung.com/bd/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-colors-green-back-s.jpg'},
    {id: 4, name: 'Samsung S23 Plus', color: 'Pink', price: 80000, img:'https://images.samsung.com/uk/smartphones/galaxy-s23/images/galaxy-s23-highlights-color-back-lavender-s.jpg'},
]



const Products = () => {
    return (
        <div className='products-area'>
            {
                allProducts.map((product=> <Product 
                key={product.id}
                product={product}
                ></Product>))
            }
        </div>
    );
};

export default Products;