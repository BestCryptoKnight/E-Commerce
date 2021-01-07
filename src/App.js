import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import { useCartContext } from './context/CartContext';
import { Error, Home, ShoppingCart } from './views';

/* const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    placeItems: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    margin: '0.2em',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
})); */

const App = () => {
  /* const classes = useStyles(); */
  const { alert } = useCartContext();
  return (
    /* <div className={classes.root}> */
    <Router>
      <CssBaseline />
      <Navbar />
      {alert.show && <Alert />}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={ShoppingCart} />
        <Route path="*" component={Error} />
      </Switch>
    </Router>
    /* </div> */
  );
};

export default App;
