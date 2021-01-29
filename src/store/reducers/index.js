import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import productsReducer from './productsReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});

export default rootReducer;
