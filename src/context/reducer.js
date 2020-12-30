const reducer = (state, action) => {
  switch (action.type) {
    case 'decrease':
      return { ...state };

    default:
      return state;
  }
};

export default reducer;
