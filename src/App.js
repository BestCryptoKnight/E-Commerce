import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Alert, Navbar } from './components';
import { useCartContext } from './context/CartContext';
import { Checkout, Error, Home, ShoppingCart } from './views';

const App = () => {
  const { alert } = useCartContext();

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
