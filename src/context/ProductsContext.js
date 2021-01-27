import { createContext, useContext, useEffect, useReducer } from 'react';
import productsReducer from './productsReducer';

const url = 'https://fakestoreapi.com/products';

const initialProductState = {
  loading: false,
  products: [],
  query: '',
};

const ProductsContext = createContext(initialProductState);

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialProductState);

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch({ type: 'loading' });
      try {
        const response = await fetch(url);
        const data = await response.json();
        dispatch({ type: 'display_items', payload: data });
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  const setSearchValue = (searchValue) => {
    dispatch({ type: 'search_value', payload: searchValue });
  };

  return (
    <ProductsContext.Provider value={{ ...state, setSearchValue }}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProductsContext = () => useContext(ProductsContext);

export { useProductsContext, ProductsProvider };
