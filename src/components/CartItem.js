import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import RemoveIcon from '@material-ui/icons/Remove';
import CustomTooltip from './CustomTooltip';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 326,
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    padding: theme.spacing(1.5, 1),
    background: '#e8eaf6',
    /* background: theme.palette.info.dark,
    color: '#fafafa', */
  },
  priceContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#3f51b5',
    color: '#fafafa',
    padding: theme.spacing(1),
  },
  priceNumber: {
    border: `2px outset ${theme.palette.info.dark}`,
    padding: '0.3em 0.5em',
    borderRadius: '0.15em',
    [theme.breakpoints.down('sm')]: {
      padding: '0.3em',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0.3em 0.5em',
    },
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  btnDel: {
    background: theme.palette.secondary.main,
    color: '#fafafa',
    '&:hover': {
      background: theme.palette.secondary.dark,
    },
  },
  btnAdd: {
    background: theme.palette.primary.main,
    color: '#fafafa',
    '&:hover': {
      background: theme.palette.primary.dark,
    },
  },
  leftBtns: {
    display: 'flex',
    /* justifyContent: 'space-between', */
    /* gap: '0.75em', */
    alignItems: 'center',
    gap: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      gap: theme.spacing(1),
    },
  },
}));

const CartItem = ({ item, increase, decrease, removeItem }) => {
  const classes = useStyles();
  const { id, image, title, price, qty } = item;
  const totalPrice = (qty * price).toFixed(2);

  return (
    <Card>
      <CardMedia image={image} alt={title} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h6" align="center">
          {title}
        </Typography>
      </CardContent>
      <Divider variant="fullWidth" />
      <CardContent className={classes.priceContainer}>
        <Typography variant="h6">Total price:</Typography>
        <Typography
          className={classes.priceNumber}
          variant="h6"
          title={totalPrice}
        >
          {totalPrice} €
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.leftBtns}>
          <CustomTooltip title="Remove one item from cart">
            <span>
              <Button
                type="button"
                onClick={() => decrease(id)}
                variant="outlined"
                disabled={qty <= 1}
                className={classes.btnDel}
                aria-label="remove one item from cart"
              >
                <RemoveIcon />
              </Button>
            </span>
          </CustomTooltip>
          <Typography variant="h6" component="p">
            <strong>{qty}</strong>
          </Typography>
          <CustomTooltip title="Add one additional item to cart">
            <Button
              type="button"
              variant="outlined"
              onClick={() => increase(id)}
              className={classes.btnAdd}
              aria-label="add one more item to cart"
            >
              <AddIcon />
            </Button>
          </CustomTooltip>
        </div>
        <Button
          variant="contained"
          type="button"
          color="secondary"
          onClick={() => removeItem(id)}
          startIcon={<DeleteIcon />}
          aria-label="remove item from cart"
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
