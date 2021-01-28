import { DISPLAY_ITEMS, LOADING, SEARCH_VALUE } from '../constants/actionTypes';

const url = 'https://fakestoreapi.com/products';

const loading = () => ({ type: LOADING });

const displayItems = (data) => ({ type: DISPLAY_ITEMS, payload: data });

const setSearchValue = (searchValue) => ({
  type: SEARCH_VALUE,
  payload: searchValue,
});

const fetchProducts = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: DISPLAY_ITEMS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

const productsActions = { fetchProducts, setSearchValue };

export default productsActions;
