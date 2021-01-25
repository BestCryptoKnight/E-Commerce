import { createContext, useContext, useEffect, useReducer } from 'react';
import cartReducer from './cartReducer';

const getLocalStorage = () =>
  localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

const initialCartState = {
  cart: getLocalStorage(),
  totalPrice: 0,
  amount: 0,
  alert: { show: false, type: '', msg: '' },
};

const CartContext = createContext(initialCartState);

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
    dispatch({ type: 'count_cart_totals' });
    dispatch({ type: 'get_total_price' });
  }, [state.cart]);

  const addToCart = (id, title, price, description, category, image, qty) => {
    dispatch({
      type: 'add_to_cart',
      payload: { id, title, price, description, category, image, qty },
    });
  };

  const increase = (id) => {
    dispatch({ type: 'increase', payload: id });
  };

  const decrease = (id) => {
    dispatch({ type: 'decrease', payload: id });
  };

  const removeItem = (id) => {
    dispatch({ type: 'remove_item', payload: id });
  };

  const clearCart = () => {
    dispatch({ type: 'clear_cart' });
  };

  const clearAlert = () => {
    dispatch({ type: 'clear_alert' });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        clearCart,
        increase,
        decrease,
        removeItem,
        clearAlert,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => useContext(CartContext);

export { useCartContext, CartProvider };
