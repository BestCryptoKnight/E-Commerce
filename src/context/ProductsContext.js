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
const urlProducts = 'https://fakestoreapi.com/products/categories';

const ProductsContext = createContext(null);

const initialProductState = {
  loading: false,
  products: [],
};

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialProductState);
  const [categories, setCategories] = useState(['All']);

  useEffect(() => {
    const fetchProducts = async (limitNumber = 5) => {
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
    fetchProducts(15);
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(urlProducts);
        const data = await response.json();

        if (data) {
          setCategories((prevCat) => [...prevCat, ...data]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);

  /* const products = (id) => {
    dispatch({ type: 'increase', payload: id });
  }; */

  return (
    <ProductsContext.Provider value={{ ...state }}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProductsContext = () => useContext(ProductsContext);

export { useProductsContext, ProductsProvider };
