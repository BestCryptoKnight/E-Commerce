const showAlert = (show = false, type = '', msg = '') => {
  return { show, type, msg };
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
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
    case 'count_cart_totals':
      const amount = state.cart.reduce((acc, item) => acc + item.qty, 0);

      return { ...state, amount };
    case 'get_total_price':
      const totalPrice = state.cart.reduce((cartTotal, cartItem) => {
        const { qty, price } = cartItem;
        const itemTotal = qty * price;

        return cartTotal + itemTotal;
      }, 0);

      return { ...state, totalPrice };

    // alert
    case 'clear_alert': {
      return { ...state, alert: showAlert() };
    }

    default:
      return state;
  }
};

export default cartReducer;
