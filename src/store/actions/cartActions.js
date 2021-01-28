import {
  ADD_TO_CART,
  CLEAR_ALERT,
  CLEAR_CART,
  COUNT_CART_AMOUNT,
  DECREASE,
  GET_TOTAL_PRICE,
  INCREASE,
  REMOVE_ITEM,
} from '../constants/actionTypes';
import store from '../store';

const getCartTotals = () => {
  store.dispatch({ type: COUNT_CART_AMOUNT });
};
const getTotalPrice = () => {
  store.dispatch({ type: GET_TOTAL_PRICE });
};

const addToCart = (id, title, price, description, category, image, qty) => ({
  type: ADD_TO_CART,
  payload: { id, title, price, description, category, image, qty },
});

const increase = (id) => {
  store.dispatch({ type: INCREASE, payload: id });
};

const decrease = (id) => {
  store.dispatch({ type: DECREASE, payload: id });
};

const removeItem = (id) => {
  store.dispatch({ type: REMOVE_ITEM, payload: id });
};

const clearCart = () => {
  store.dispatch({ type: CLEAR_CART });
};

const clearAlert = () => {
  store.dispatch({ type: CLEAR_ALERT });
};

const cartActions = {
  addToCart,
  increase,
  decrease,
  removeItem,
  clearAlert,
  clearCart,
  getCartTotals,
  getTotalPrice,
};

export default cartActions;
// export {
//   addToCart,
//   increase,
//   decrease,
//   removeItem,
//   clearAlert,
//   clearCart,
//   getCartTotals,
//   getTotalPrice,
// };
