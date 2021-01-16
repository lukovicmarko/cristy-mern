import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
    const { name, image, price, rating } = product;
    return (
        // <Link to={`/product/${product._id}`}>
        <div className="product-card">
            <div className="product-card__image">
                <img src={image} alt="" />
            </div>
            <div>
                <h5 className="product-card__name">{name}</h5>
                <span className="product-card__price">${price}</span>
                <Rating value={rating} />

            </div>
        </div>
        // </Link>
    )
}

export default Product
