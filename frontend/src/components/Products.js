import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('/api/products');
            console.log(data.products)

            setProducts(data.products);
        }

        fetchProducts();
    }, []);

    return (
        <div className="products">
            <div className="products-header">
                <h1>Our Collections</h1>
                <div className="products-header__text">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa perferendis quibusdam eveniet corporis blanditiis, ea, exercitationem temporibus esse id facilis, sed harum nihil aliquam quos labore deleniti sunt modi sequi.</p>
                </div>
            </div>
            <div className="products-grid">
                {
                    products.map(product => <Product product={product} key={product._id} />)
                }
            </div>
        </div>
    )
}

export default Products
