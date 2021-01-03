import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import reducer from './reducer';

const StoreContext = createContext(null);
/* const url = 'https://fakestoreapi.com/products/'; */
const url = 'https://fakestoreapi.com/products?limit=5';

const getLocalStorage = () => {
  const cart = localStorage.getItem('cart');

  return cart ? JSON.parse(localStorage.getItem('cart')) : [];
};

const initialState = {
  loading: false,
  cart: getLocalStorage(),
  totalPrice: 0,
  amount: 0,
  products: [],
};

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [alert, setAlert] = useState({ show: false, type: '', msg: '' });
  /* const [products, setProducts] = useState([]); */
  /* const [loading, setLoading] = useState(false); */
  const [filterStatus, setFilterStatus] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState(['all']);

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch({ type: 'loading' });

      try {
        const response = await fetch(url);
        const data = await response.json();
        data.map((item) => (item.qty = 1));
        dispatch({ type: 'display_items', payload: data });

        /* setProducts(data); */
      } catch (error) {
        console.log(error);
      } finally {
        /* dispatch({ type: 'display_items', payload: data }); */
        /* setLoading(false); */
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setCategories((prevCategories) => [...prevCategories, ...data]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => localStorage.setItem('cart', JSON.stringify(state.cart)), [
    state.cart,
  ]);

  const showAlert = (show = false, type = '', msg = '') =>
    setAlert({ show, type, msg });

  /*   const filterCategories = (category) => {
    if (category === 'all') return;
    setFilteredProducts(products.filter((product) => product[category]));
  }; */

  /* useEffect(() => {
    const filterCategories = (category) => {
      category === 'all'
        ? setFilteredProducts(products)
        : setFilteredProducts(products.filter((product) => product[category]));
    };
    filterCategories();
  }, [products, filterStatus]); */

  const addToCart = (id, title, price, description, category, image, qty) => {
    dispatch({
      type: 'add_to_cart',
      payload: { id, title, price, description, category, image, qty },
    });
    /* setAlert({ show: true, type: 'success', msg: 'Tere!' }); */
    showAlert(true, 'success', 'Added to Cart');
  };

  const clearCart = () => {
    dispatch({ type: 'clear_cart' });
    setAlert({ show: true, type: 'error', msg: 'Cart cleared' });
    /* showAlert(true, 'error', 'Cart cleared!'); */
  };

  /*   const addToCart = (id, color, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } });
  };
  // remove item
  const removeItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };
  // toggle amount
  const toggleAmount = (id, value) => {
    dispatch({
      type: TOGGLE_CART_ITEM_AMOUNT,
      payload: {
        id,
        value,
      },
    });
  };
  // clear cart
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  }; */

  /*   useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart))
    dispatch({ type: COUNT_CART_TOTALS })
  }, [state.cart]) */

  return (
    <StoreContext.Provider
      value={{
        ...state,
        /*         products,
        loading, */
        filterStatus,
        setFilterStatus,
        categories,
        addToCart,
        clearCart,
        alert,
        setAlert,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

const useStoreContext = () => useContext(StoreContext);

export { useStoreContext, StoreProvider };
