import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Spinner from './components/Spinner';
import { Error, Home } from './views';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    placeItems: 'center',
    margin: '0.2em',
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
    <div className={classes.root}>
      <Router>
        <CssBaseline />
        <Spinner />
        <Grid container spacing={24}>
          <Grid item xs={9}>
            {/* <ShopContainer /> */}
          </Grid>

          <Grid item xs={3}>
            {/* <CartContainer /> */}
          </Grid>
        </Grid>

        <Navbar />
        <Switch>
          <Route exact to="/" component={Home} />
          <Route to="*" component={Error} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
