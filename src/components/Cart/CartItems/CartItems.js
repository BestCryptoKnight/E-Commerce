import { Button, Grid, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import NextWeekIcon from '@material-ui/icons/NextWeek';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import allActions from '../../../store/actions';
import CartItem from './CartItem/CartItem';
import useStyles from './styles';

const selectCart = (state) => state.cart.cart;
const selectTotalPrice = (state) => state.cart.totalPrice;

const CartItems = () => {
  const cart = useSelector(selectCart);
  const totalPrice = useSelector(selectTotalPrice);
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={3} justify="center">
        {cart.map((item) => (
          <Grid item xs={12} sm={6} lg={4} key={item.id}>
            <CartItem {...item} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography
          variant="h4"
          component="p"
          className={classes.total}
          align="center"
          title={totalPrice}
        >
          Subtotal: <strong>{totalPrice}&nbsp;€</strong>
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
            onClick={() => dispatch(allActions.cartActions.clearCart())}
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
