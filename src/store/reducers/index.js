import { combineReducers } from 'react-redux';
import cartReducer from './cartReducer';
import productsReducer from './productsReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});

// cart
export const getCart = (state) => state.cart;
export const getTotalPrice = (state) => state.totalPrice;
export const getAmount = (state) => state.amount;
export const getAlert = (state) => state.alert;

//products
export const getLoading = (state) => state.loading;
export const getProducts = (state) => state.products;
export const getQuery = (state) => state.query;

export default rootReducer;
