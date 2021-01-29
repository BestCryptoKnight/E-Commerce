import CssBaseline from '@material-ui/core/CssBaseline';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Alert, Navbar } from './components';
import allActions from './store/actions';
import { Checkout, Error, Home, ShoppingCart } from './views';

const selectAlert = (state) => state.cart.alert;
const selectCart = (state) => state.cart.cart;

const App = () => {
  const cart = useSelector(selectCart);
  const alert = useSelector(selectAlert);
  const dispatch = useDispatch();

  useEffect(() => dispatch(allActions.productsActions.fetchProducts()), [
    dispatch,
  ]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    dispatch(allActions.cartActions.getTotals());
  }, [cart, dispatch]);

  return (
    <Router>
      <CssBaseline />
      <Navbar />
      {alert.show && <Alert />}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={ShoppingCart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
};

export default App;
