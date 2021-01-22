const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'add_to_cart':
      const productId = payload.id;
      const existingCartItem = state.cart.find(
        (product) => product.id === productId
      );

      /*       const existingItemAdd = () => {
        const cart = state.cart.map((product) =>
          product.id === productId
            ? { ...product, qty: product.qty + 1 }
            : product
        );
        return { ...state, cart };
      };

      const newItemAdd = () => {
        return {
          ...state,
          cart: [...state.cart, payload],
        };
      };

      existingCartItem ? existingItemAdd() : newItemAdd();
 */
      if (existingCartItem) {
        const cart = state.cart.map((product) =>
          product.id === productId
            ? { ...product, qty: product.qty + 1 }
            : product
        );

        return { ...state, cart };
      }

      return {
        ...state,
        cart: [...state.cart, { ...payload, qty: 1 }],
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

      return { ...state, cart: itemRemoved };
    case 'clear_cart':
      return { ...state, cart: [] };
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

    // const { total, amount } = state.cart.reduce(
    //   (cartTotal, cartItem) => {
    //     const { price, amount } = cartItem;
    //     const itemTotal = price * amount;
    //     cartTotal.total += itemTotal;
    //     cartTotal.amount += amount;
    //     return cartTotal;
    //   },
    //   {
    //     total: 0,
    //     amount: 0,
    //   }
    // );
    // total = parseFloat(total.toFixed(2));
    // return { ...state, total, amount };

    default:
      return state;
  }
};

export default cartReducer;
