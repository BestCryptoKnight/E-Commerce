import { Button, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DeleteIcon from '@material-ui/icons/Delete';
import NextWeekIcon from '@material-ui/icons/NextWeek';
import { Link, useHistory } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import CartItem from './CartItem';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    placeItems: 'center',
    /* background: 'rgba(193, 198, 226,0.15)', */
  },
  title: {
    margin: theme.spacing(2, 0),
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing(1),
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    top: '50%',
    left: '160%',
    transform: 'translate(0,-50%)',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    [theme.breakpoints.up('lg')]: {
      left: '212%',
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
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
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
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: theme.spacing(2),
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
    <section className={classes.emptyCartContainer}>
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
    </section>
  );

  const renderCart = () => (
    <>
      <Grid container spacing={3} justify="center">
        {cart.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <CartItem
              item={item}
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
        <div className={classes.btnContainer}>
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
        </div>
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
        {/*         <Typography
          variant="overline"
          component="span"
          className={classes.amount}
        >
          ({amount} items)
        </Typography> */}
      </div>
      {cart.length ? renderCart() : renderEmptyCart()}
    </Container>
  );
};

export default Cart;
