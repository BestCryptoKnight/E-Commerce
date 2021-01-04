const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'decrease':
      return { ...state };
    case 'add_to_cart':
      const productId = payload.id;

      if (state.cart.findIndex((product) => product.id === productId) !== -1) {
        const cart = state.cart.reduce((cartAcc, product) => {
          if (product.id === productId) {
            cartAcc.push({ ...product, qty: product.qty + 1 });
          } else {
            cartAcc.push(product);
          }

          return cartAcc;
        }, []);

        return { ...state, cart, amount: state.amount + 1 };
      }

      return {
        ...state,
        cart: [...state.cart, payload],
        amount: state.amount + 1,
      };
    /*       const cart = [...state.cart, payload];
      return { ...state, cart }; */
    case 'loading':
      return { ...state, loading: true };
    case 'display_items':
      const products = [...state.products, ...payload];
      return {
        ...state,
        products,
        loading: false,
      };
    case 'clear_cart':
      return { ...state, cart: [] };
    default:
      return state;
  }
};

export default reducer;
