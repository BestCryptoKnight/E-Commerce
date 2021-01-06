import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import cartReducer from './cartReducer';

const CartContext = createContext(null);

const getLocalStorage = () =>
  localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

const initialCartState = {
  cart: getLocalStorage(),
  totalPrice: 0,
  amount: 0,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);
  const [alert, setAlert] = useState({ show: false, type: '', msg: '' });
  /* const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState(['all']); */

  /* useEffect(() => {
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
  }, []); */

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
    dispatch({ type: 'count_cart_totals' });
    dispatch({ type: 'get_total_price' });
  }, [state.cart]);

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
    showAlert(true, 'success', 'Added to Cart');
  };

  const increase = (id) => {
    dispatch({ type: 'increase', payload: id });
  };

  const decrease = (id) => {
    dispatch({ type: 'decrease', payload: id });
  };

  const removeItem = (id) => {
    dispatch({ type: 'remove_item', payload: id });
    showAlert(true, 'error', 'Removed item from Cart');
  };

  const clearCart = () => {
    dispatch({ type: 'clear_cart' });
    showAlert(true, 'error', 'Cart cleared');
  };
  // toggle amount
  /* const toggleAmount = (id, value) => {
    dispatch({
      type: TOGGLE_CART_ITEM_AMOUNT,
      payload: {
        id,
        value,
      },
    });
  };  */

  return (
    <CartContext.Provider
      value={{
        ...state,
        /*categories*/
        addToCart,
        clearCart,
        alert,
        setAlert,
        increase,
        decrease,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => useContext(CartContext);

export { useCartContext, CartProvider };
