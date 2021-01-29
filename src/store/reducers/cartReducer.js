import {
  ADD_TO_CART,
  CLEAR_ALERT,
  CLEAR_CART,
  DECREASE,
  GET_TOTALS,
  INCREASE,
  REMOVE_ITEM,
} from '../constants/actionTypes';

const showAlert = (show = false, type = '', msg = '') => ({ show, type, msg });

const getLocalStorage = () =>
  localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

const initialCartState = {
  cart: getLocalStorage(),
  totalPrice: 0,
  amount: 0,
  alert: { show: false, type: '', msg: '' },
};

const cartReducer = (state = initialCartState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_TOTALS: {
      let { totalPrice, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, qty } = cartItem;
          const itemTotal = price * qty;
          cartTotal.totalPrice += itemTotal;
          cartTotal.amount += qty;
          return cartTotal;
        },
        {
          totalPrice: 0,
          amount: 0,
        }
      );
      totalPrice = parseFloat(totalPrice.toFixed(2));
      return { ...state, totalPrice, amount };
    }
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
    // alert
    case CLEAR_ALERT: {
      return { ...state, alert: showAlert() };
    }
    default:
      return state;
  }
};

export default cartReducer;
