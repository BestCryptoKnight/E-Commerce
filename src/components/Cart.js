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
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    margin: theme.spacing(1, 0),
    textAlign: 'right',
    [theme.breakpoints.only('xs')]: {
      textAlign: 'center',
      fontSize: '1.65rem',
    },
  },
  itemAmount: {
    color: theme.palette.primary.dark,
    fontSize: '1.3rem',
    // margin: theme.spacing(0, 0, 1, 0),
    [theme.breakpoints.only('xs')]: {
      // textAlign: 'center',
      fontSize: '1.2rem',
    },
  },
  backContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
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
    fontSize: '1.6rem',
    /*  border: `4px double ${theme.palette.info.dark}`,
    borderRadius: '0.15em', */
    /* padding: theme.spacing(1), */
  },
  paper: {
    display: 'grid',
    placeItems: 'center',
    margin: theme.spacing(12),
    padding: theme.spacing(3),
    whiteSpace: 'nowrap',
    height: 150,
  },
}));

const amountText = (amount) => (amount === 1 ? 'item' : 'items');

const Cart = () => {
  const {
    cart,
    totalPrice,
    clearCart,
    increase,
    decrease,
    removeItem,
    amount,
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
          title={totalPrice.toFixed(2)}
        >
          Subtotal: <strong>{totalPrice.toFixed(2)}&nbsp;€</strong>
        </Typography>
        <Grid
          container
          justify="space-between"
          align="center"
          className={classes.btnContainer}
        >
          <Button
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
      <Grid container alignItems="center">
        <Grid item xs={12} sm={8}>
          <Typography className={classes.title} variant="h4">
            Your Shopping Cart {}
            <Typography
              variant="button"
              component="span"
              className={classes.itemAmount}
            >
              ({amount} {amountText(amount)})
            </Typography>
          </Typography>
        </Grid>
        <Grid item xs={false} sm={4} className={classes.backContainer}>
          <Button
            onClick={handleClick}
            type="button"
            variant="contained"
            color="primary"
            startIcon={<ArrowBackIcon />}
            aria-label="Go back"
            title="Go back"
          >
            Back
          </Button>
        </Grid>
      </Grid>
      {cart.length ? renderCart() : renderEmptyCart()}
    </Container>
  );
};

export default Cart;
