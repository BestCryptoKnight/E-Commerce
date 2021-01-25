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
    case 'search_value':
      return { ...state, query: payload };
    default:
      return state;
  }
};

export default productsReducer;
