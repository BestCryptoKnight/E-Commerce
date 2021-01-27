import { DISPLAY_ITEMS, LOADING, SEARCH_VALUE } from '../constants/actionTypes';

const initialProductState = {
  loading: false,
  products: [],
  query: '',
};

const productsReducer = (state = { initialProductState }, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOADING:
      return { ...state, loading: true };
    case DISPLAY_ITEMS:
      return {
        ...state,
        products: payload,
        loading: false,
      };
    case SEARCH_VALUE:
      return { ...state, query: payload };
    default:
      return state;
  }
};

export const getLoading = (state) => state.loading;
export const getProducts = (state) => state.products;
export const getQuery = (state) => state.query;

export default productsReducer;
