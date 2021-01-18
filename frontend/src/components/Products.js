import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product';
import { listProducts } from '../actions/productActions';

const Products = () => {
    const dispatch = useDispatch();

    const state = useSelector(state => state.products);

    const { loading, error, products } = state;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);



    return (
        <div className="products">
            <div className="products-header">
                <h1>Our Collections</h1>
                <div className="products-header__text">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa perferendis quibusdam eveniet corporis blanditiis, ea, exercitationem temporibus esse id facilis, sed harum nihil aliquam quos labore deleniti sunt modi sequi.</p>
                </div>
            </div>

            {
                loading ? <h2>Loading...</h2> : error ? <h3>{error}</h3> :
                    <div className="products-grid">
                        {
                            products.map(product => <Product product={product} key={product._id} />)
                        }
                    </div>
            }


        </div>
    )
}

export default Products
