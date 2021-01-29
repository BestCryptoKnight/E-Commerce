import {
  DISPLAY_ITEMS,
  ERROR,
  LOADING,
  SEARCH_VALUE,
} from '../constants/actionTypes';

const initialProductState = {
  loading: false,
  products: [],
  error: null,
  query: '',
};

const productsReducer = (state = initialProductState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOADING:
      return { ...state, loading: true, error: null };
    case DISPLAY_ITEMS:
      return {
        ...state,
        loading: false,
        products: payload,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        products: [],
        error: payload,
      };
    case SEARCH_VALUE:
      return { ...state, query: payload };
    default:
      return state;
  }
};

export default productsReducer;
