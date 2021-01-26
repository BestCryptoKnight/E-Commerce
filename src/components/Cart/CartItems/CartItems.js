import { Button, Grid, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import NextWeekIcon from '@material-ui/icons/NextWeek';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../../context/CartContext';
import CartItem from './CartItem/CartItem';
import useStyles from './styles';

const CartItems = () => {
  const {
    cart,
    totalPrice,
    clearCart,
    increase,
    decrease,
    removeItem,
  } = useCartContext();
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={2} justify="center">
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
};

export default CartItems;
