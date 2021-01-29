import { Container, Fab, Grid, Typography } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { useSelector } from 'react-redux';
import { ScrollTop } from '../../components';
import { CartItems, EmptyCart } from '../Cart';
import useStyles from './styles';

const amountText = (amount) => (amount === 1 ? 'item' : 'items');
const selectAmount = (state) => state.cart.amount;
const selectCart = (state) => state.cart.cart;

const Cart = () => {
  const cart = useSelector(selectCart);
  const amount = useSelector(selectAmount);
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid
        container
        alignItems="center"
        justify="center"
        className={classes.titleContainer}
      >
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
      {cart.length ? <CartItems /> : <EmptyCart />}
      <ScrollTop>
        <Fab
          color="secondary"
          size="small"
          aria-label="Scroll back to top"
          title="Scroll back to top"
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Container>
  );
};

export default Cart;
