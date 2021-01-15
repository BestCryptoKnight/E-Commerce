const productsReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'loading':
      return { ...state, loading: true };
    case 'display_items':
      const products = [/* ...state.products,  */ ...payload];
      return {
        ...state,
        products,
        loading: false,
      };
    default:
      return state;
  }
};

export default productsReducer;
