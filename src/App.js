import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Checkout, Error, Home } from './views';

const useStyles = makeStyles((theme) => ({
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
}));

/* const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})); */

const App = () => {
  const classes = useStyles();
  return (
    /* <div className={classes.root}> */
    <Router>
      <CssBaseline />
      <Navbar id="back-to-top-anchor" />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/checkout" component={Checkout} />
        <Route path="*" component={Error} />
      </Switch>
    </Router>
    /* </div> */
  );
};

export default App;
