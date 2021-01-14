import { Button, Container, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DeleteIcon from '@material-ui/icons/Delete';
import NextWeekIcon from '@material-ui/icons/NextWeek';
import { Link, useHistory } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import CartItem from './CartItem';

const useStyles = makeStyles((theme) => ({
  container: {
    // display: 'grid',
    // placeItems: 'center',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#f2f3f3',
    minHeight: '93vh',
  },
  title: {
    margin: theme.spacing(2, 0),
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    gap: theme.spacing(1),
  },
  backButton: {
    position: 'absolute',
    top: '50%',
    left: '160%',
    transform: 'translate(0,-50%)',
    [theme.breakpoints.up('lg')]: {
      left: '187%',
    },
    [theme.breakpoints.down('sm')]: {
      left: '119%',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  amount: {
    /* color: theme.palette.primary.dark, */
    fontSize: '1.5rem',
    /* margin: theme.spacing(0, 0, 1), */
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '0.3em',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '1.25em',
    },
  },
  checkoutButton: {
    minWidth: '150px',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  cardDetails: {
    width: '100%',
    margin: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      width: '66%',
    },
  },
  btnContainer: {
    margin: theme.spacing(2, 0),
  },
  total: {
    background: '#3f51b5',
    color: '#fafafa',
    padding: '0.3em 0.5em',
    fontSize: '1.8rem',
    /*  border: `4px double ${theme.palette.info.dark}`,
    borderRadius: '0.15em', */
    /* padding: theme.spacing(1), */
  },
  emptyCartContainer: {
    margin: theme.spacing(2),
    // gap: theme.spacing(2),
    // display: 'flex',
    // alignItems: 'center',
    // flexDirection: 'column',
  },
  paper: {
    display: 'grid',
    placeItems: 'center',
    padding: theme.spacing(3),
    whiteSpace: 'nowrap',
    height: 150,
  },
}));

const Cart = () => {
  const {
    cart,
    totalPrice,
    clearCart,
    increase,
    decrease,
    removeItem,
  } = useCartContext();
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => history.goBack();

  const renderEmptyCart = () => (
    <Paper elevation={2} className={classes.paper}>
      <Typography variant="subtitle1">
        You have no items in your shopping cart!
      </Typography>
      <Link className={classes.link} to="/">
        <Button
          className={classes.checkoutButton}
          size="large"
          type="button"
          variant="contained"
          color="primary"
          startIcon={<NextWeekIcon />}
          aria-label="Go to products page"
        >
          Start adding some!
        </Button>
      </Link>
    </Paper>
  );

  const renderCart = () => (
    <>
      <Grid container spacing={3} justify="center">
        {cart.map((item) => (
          <Grid item xs={12} sm={6} lg={4} key={item.id}>
            <CartItem
              {...item}
              increase={increase}
              decrease={decrease}
              removeItem={removeItem}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography
          variant="h4"
          component="p"
          className={classes.total}
          align="center"
        >
          Subtotal: <strong>{totalPrice.toFixed(2)}</strong>&nbsp;€
        </Typography>
        <Grid
          container
          direction="row"
          justify="space-between"
          align="center"
          className={classes.btnContainer}
        >
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={clearCart}
            startIcon={<DeleteIcon />}
            aria-label="Clear the cart"
          >
            Empty cart
          </Button>
          <Button
            className={classes.checkoutButton}
            component={Link}
            to="/checkout"
            size="large"
            type="button"
            variant="contained"
            color="primary"
            startIcon={<NextWeekIcon />}
            aria-label="Proceed to checkout"
          >
            Checkout
          </Button>
        </Grid>
      </div>
    </>
  );

  return (
    <Container className={classes.container}>
      <div className={classes.titleContainer}>
        <Typography className={classes.title} variant="h4" gutterBottom>
          Your Shopping Cart
        </Typography>
        <Button
          className={classes.backButton}
          onClick={handleClick}
          size="large"
          type="button"
          variant="contained"
          color="primary"
          startIcon={<ArrowBackIcon />}
          aria-label="Go back"
        >
          Go back
        </Button>
      </div>
      {cart.length ? renderCart() : renderEmptyCart()}
    </Container>
  );
};

export default Cart;
