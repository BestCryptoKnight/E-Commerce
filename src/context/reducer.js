const reducer = (state, action) => {
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
        return { ...state, cart, amount: state.amount + 1 };
      };

      const newItemAdd = () => {
        return {
          ...state,
          cart: [...state.cart, payload],
          amount: state.amount + 1,
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

      /*       if (state.cart.findIndex((product) => product.id === productId) !== -1) {
        const cart = state.cart.reduce((cartAcc, product) => {
          if (product.id === productId) {
            cartAcc.push({ ...product, qty: product.qty + 1 });
          } else {
            cartAcc.push(product);
          }

          return cartAcc;
        }, []);

        return { ...state, cart, amount: state.amount + 1 };
      } */

      return {
        ...state,
        cart: [...state.cart, payload],
      };
    case 'loading':
      return { ...state, loading: true };
    case 'display_items':
      const products = [...state.products, ...payload];
      return {
        ...state,
        products,
        loading: false,
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
      let totalPrice = state.cart.reduce((cartTotal, cartItem) => {
        const { qty, price } = cartItem;
        const itemTotal = qty * price;
        return cartTotal + itemTotal;
      }, 0);

      return { ...state, totalPrice };

    default:
      return state;
  }
};

export default reducer;
