import React from 'react';
import { useParams } from 'react-router-dom';
import productData from '../../mockData/productData';
import Header from '../Header/Header';
import './Details.css'



const Details = () => {
    const { id } = useParams();
    // console.log("id-->", id);
    const detailsData = productData?.find((item) => (item?.id === id));
    // console.log("details Data --->", detailsData);
    // console.log(productData);
    const {name, img, price, color} =detailsData

    return (
        <div>

            <Header></Header>
            <h2>{name}</h2>
            <img className='pro-img1' src={img} alt="" />
            <p>{color}</p>
            <p>TK: {price}</p>

        </div>
    );
};

export default Details;