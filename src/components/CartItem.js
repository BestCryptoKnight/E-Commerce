import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useStoreContext } from '../context/StoreContext';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 260,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const CartItem = () => {
  const { products, loading } = useStoreContext();
  const classes = useStyles();
  return (
    <Container>
      <Typography>Tere</Typography>
    </Container>
  );
};

export default CartItem;
