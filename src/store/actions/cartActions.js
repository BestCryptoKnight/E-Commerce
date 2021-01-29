import {
  ADD_TO_CART,
  CLEAR_ALERT,
  CLEAR_CART,
  DECREASE,
  GET_TOTALS,
  INCREASE,
  REMOVE_ITEM,
} from '../constants/actionTypes';

const getTotals = () => ({ type: GET_TOTALS });

const addToCart = (id, title, price, description, category, image, qty) => ({
  type: ADD_TO_CART,
  payload: { id, title, price, description, category, image, qty },
});

const increase = (id) => ({ type: INCREASE, payload: id });
const decrease = (id) => ({ type: DECREASE, payload: id });
const removeItem = (id) => ({ type: REMOVE_ITEM, payload: id });
const clearCart = () => ({ type: CLEAR_CART });
const clearAlert = () => ({ type: CLEAR_ALERT });

const cartActions = {
  addToCart,
  increase,
  decrease,
  removeItem,
  clearAlert,
  clearCart,
  getTotals,
};

export default cartActions;
