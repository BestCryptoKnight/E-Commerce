import { Button, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import NextWeekIcon from '@material-ui/icons/NextWeek';
import { Link } from 'react-router-dom';
import { useStoreContext } from '../context/StoreContext';
import CartItem from './CartItem';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    placeItems: 'center',
  },
  title: {
    margin: theme.spacing(2, 0),
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing(1),
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
    textAlign: 'center',
    /*  border: `4px double ${theme.palette.info.dark}`,
    borderRadius: '0.15em', */
    /* padding: theme.spacing(1), */
  },
  emptyCartContainer: {
    display: 'grid',
    placeItems: 'center',
    /* marginTop: theme.spacing(10), */
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
  } = useStoreContext();
  const classes = useStyles();

  const renderEmptyCart = () => (
    <section className={classes.emptyCartContainer}>
      <Typography variant="subtitle1">
        You have no items in your shopping cart!
      </Typography>
      <Link className={classes.link} to="/">
        <Typography variant="subtitle1">Start adding some!</Typography>
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
        <Typography variant="h4" component="p" className={classes.total}>
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
          Back to Products icon / Your Shopping Cart
        </Typography>
        {/*         <Typography
          variant="overline"
          component="span"
          className={classes.amount}
        >
          ({amount} items)
        </Typography> */}
      </div>
      {cart.length > 0 ? renderCart() : renderEmptyCart()}
    </Container>
  );
};

export default Cart;
