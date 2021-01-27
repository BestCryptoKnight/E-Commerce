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

const showAlert = (show = false, type = '', msg = '') => {
  return { show, type, msg };
};

const getLocalStorage = () =>
  localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

const initialCartState = {
  cart: getLocalStorage(),
  totalPrice: 0,
  amount: 0,
  alert: { show: false, type: '', msg: '' },
};

const cartReducer = (state = { initialCartState }, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_CART:
      const productId = payload.id;
      const existingCartItem = state.cart.find(
        (product) => product.id === productId
      );

      if (existingCartItem) {
        const cart = state.cart.map((product) =>
          product.id === productId
            ? { ...product, qty: product.qty + 1 }
            : product
        );

        return {
          ...state,
          cart,
          alert: showAlert(true, 'success', 'Added to Cart'),
        };
      }

      return {
        ...state,
        cart: [...state.cart, { ...payload, qty: 1 }],
        alert: showAlert(true, 'success', 'Added to Cart'),
      };

    case INCREASE:
      const cart = state.cart.map((item) =>
        item.id === payload ? { ...item, qty: item.qty + 1 } : item
      );

      return { ...state, cart };
    case DECREASE:
      const newCart = state.cart.map((item) =>
        item.id === payload ? { ...item, qty: item.qty - 1 } : item
      );

      return { ...state, cart: newCart };
    case REMOVE_ITEM:
      const itemRemoved = state.cart.filter((item) => item.id !== payload);

      return {
        ...state,
        cart: itemRemoved,
        alert: showAlert(true, 'error', 'Removed item from Cart'),
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
        alert: showAlert(true, 'error', 'Cart cleared'),
      };
    case COUNT_CART_AMOUNT:
      const amount = state.cart.reduce((acc, item) => acc + item.qty, 0);

      return { ...state, amount };
    case GET_TOTAL_PRICE:
      const totalPrice = state.cart.reduce((cartTotal, cartItem) => {
        const { qty, price } = cartItem;
        const itemTotal = qty * price;

        return cartTotal + itemTotal;
      }, 0);

      return { ...state, totalPrice };

    // alert
    case CLEAR_ALERT: {
      return { ...state, alert: showAlert() };
    }

    default:
      return state;
  }
};

export const getCart = (state) => state.cart;
export const getTotalPrice = (state) => state.totalPrice;
export const getAmount = (state) => state.amount;
export const getAlert = (state) => state.alert;

export default cartReducer;
