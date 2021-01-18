import { combineReducers } from 'redux';
import { productListReducer, productDetailsReducer } from './productsReducer';

export default combineReducers({
    products: productListReducer,
    productDetails: productDetailsReducer
});