import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rating from '../components/Rating';
import { listProductDetails } from '../actions/productActions';

const ProductScreen = ({ match }) => {

    const dispatch = useDispatch();


    const state = useSelector(state => state.productDetails);

    const { loading, error, product } = state;

    useEffect(() => {
        dispatch(listProductDetails(match.params.id));
    }, [dispatch]);

    return (
        <div>
            {product.name}
        </div>
    )
}

export default ProductScreen
