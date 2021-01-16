import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import productsReducer from './productsReducer';

/* const url = 'https://fakestoreapi.com/products/'; */
const url = 'https://fakestoreapi.com/products?limit=';

const ProductsContext = createContext(null);

const initialProductState = {
  loading: false,
  products: [],
};

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialProductState);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchProducts = async (limitNumber = 15) => {
      dispatch({ type: 'loading' });
      try {
        const response = await fetch(`${url}${limitNumber}`);
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

  /*  const filterProducts = () => {
    const filtered = products.filter((product) =>
      country.name.toLowerCase().includes(input.toLowerCase())
    );
    setInput(input);
    setProducts(filtered);
  }; */

  return (
    <ProductsContext.Provider value={{ ...state, query, setQuery }}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProductsContext = () => useContext(ProductsContext);

export { useProductsContext, ProductsProvider };
