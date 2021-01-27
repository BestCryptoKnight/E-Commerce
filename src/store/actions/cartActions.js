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

const getCartTotals = () => {
  dispatch({ type: COUNT_CART_AMOUNT });
};
const getTotalPrice = () => {
  dispatch({ type: GET_TOTAL_PRICE });
};

const addToCart = (id, title, price, description, category, image, qty) => {
  dispatch({
    type: ADD_TO_CART,
    payload: { id, title, price, description, category, image, qty },
  });
};

const increase = (id) => {
  dispatch({ type: INCREASE, payload: id });
};

const decrease = (id) => {
  dispatch({ type: DECREASE, payload: id });
};

const removeItem = (id) => {
  dispatch({ type: REMOVE_ITEM, payload: id });
};

const clearCart = () => {
  dispatch({ type: CLEAR_CART });
};

const clearAlert = () => {
  dispatch({ type: CLEAR_ALERT });
};

export default {
  addToCart,
  increase,
  decrease,
  removeItem,
  clearAlert,
  clearCart,
  getCartTotals,
  getTotalPrice,
};
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
