const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'decrease':
      return { ...state };
    case 'add_to_cart':
      const cart = [...state.cart, payload];
      return { ...state, cart };
    case 'loading':
      return { ...state, loading: true };
    case 'display_items':
      return {
        ...state,
        products: payload,
        loading: false,
      };
    case 'clear_cart':
      return { ...state, cart: [] };
    default:
      return state;
  }
};

export default reducer;
