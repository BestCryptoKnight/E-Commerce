import { DISPLAY_ITEMS, LOADING, SEARCH_VALUE } from './constants/actionTypes';

const loading = () => {
  dispatch({ type: LOADING });
};

const displayItems = (data) => {
  dispatch({ type: DISPLAY_ITEMS, payload: data });
};

const setSearchValue = (searchValue) => {
  dispatch({ type: SEARCH_VALUE, payload: searchValue });
};

export default { setSearchValue, loading, displayItems };
