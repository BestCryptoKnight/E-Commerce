const reducer = (state, action) => {
  switch (action.type) {
    case 'decrease':
      return { ...state };
    case 'add_to_cart':
      const newItem = {
        id: action.payload.id,
        title: action.payload.title,
        price: action.payload.price,
        description: action.payload.description,
        category: action.payload.category,
        image: action.payload.image,
      };
      const cart = [...state.cart, newItem];

      return { ...state, cart };

    case 'loading':
      return { ...state, loading: true };

    case 'display_items':
      return { ...state, products: action.payload, loading: false };

    default:
      return state;
  }
};

export default reducer;
