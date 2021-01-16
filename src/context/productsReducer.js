const productsReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'loading':
      return { ...state, loading: true };
    case 'display_items':
      return {
        ...state,
        products: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default productsReducer;
