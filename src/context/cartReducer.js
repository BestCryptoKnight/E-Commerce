const showAlert = (show = false, type = '', msg = '') => ({ show, type, msg });

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'get_totals': {
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
      return { ...state, totalPrice, amount };
    }
    case 'add_to_cart':
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

    case 'increase':
      const cart = state.cart.map((item) =>
        item.id === payload ? { ...item, qty: item.qty + 1 } : item
      );

      return { ...state, cart };
    case 'decrease':
      const newCart = state.cart.map((item) =>
        item.id === payload ? { ...item, qty: item.qty - 1 } : item
      );

      return { ...state, cart: newCart };
    case 'remove_item':
      const itemRemoved = state.cart.filter((item) => item.id !== payload);

      return {
        ...state,
        cart: itemRemoved,
        alert: showAlert(true, 'error', 'Removed item from Cart'),
      };
    case 'clear_cart':
      return {
        ...state,
        cart: [],
        alert: showAlert(true, 'error', 'Cart cleared'),
      };

    // alert
    case 'clear_alert': {
      return { ...state, alert: showAlert() };
    }

    default:
      return state;
  }
};

export default cartReducer;
