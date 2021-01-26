import { Container, Fab, Grid, Typography } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { ScrollTop } from '../../components';
import { useCartContext } from '../../context/CartContext';
import { CartItems, EmptyCart } from '../Cart';
import useStyles from './styles';

const amountText = (amount) => (amount === 1 ? 'item' : 'items');

const Cart = () => {
  const { cart, amount } = useCartContext();
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
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Container>
  );
};

export default Cart;
