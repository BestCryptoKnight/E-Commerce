import { Button, Container, Grid, Paper, Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DeleteIcon from '@material-ui/icons/Delete';
import NextWeekIcon from '@material-ui/icons/NextWeek';
import { Link, useHistory } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import CartItem from './CartItem/CartItem';
import useStyles from './styles';

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
      <Grid container alignItems="center" className={classes.titleContainer}>
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
