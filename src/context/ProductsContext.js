import { createContext, useContext, useEffect, useReducer } from 'react';
import productsReducer from './productsReducer';

/* const url = 'https://fakestoreapi.com/products/'; */
const url = 'https://fakestoreapi.com/products?limit=5';

const ProductsContext = createContext(null);

const initialProductState = {
  loading: false,
  products: [],
};

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialProductState);

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch({ type: 'loading' });
      try {
        const response = await fetch(url);
        const data = await response.json();
        data.map((item) => (item.qty = 1));
        dispatch({ type: 'display_items', payload: data });
      } catch (error) {
        console.log(error);
      } finally {
        /* dispatch({ type: 'display_items', payload: data }); */
        /* setLoading(false); */
      }
    };
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ ...state }}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProductsContext = () => useContext(ProductsContext);

export { useProductsContext, ProductsProvider };
