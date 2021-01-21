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
import { useState } from 'react';
import { CustomTooltip, Modal } from '../components';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 276,
    backgroundSize: 'contain',
    cursor: 'pointer',
  },
  title: {
    padding: theme.spacing(1.5, 1),
    background: '#f7f8ff',
    minHeight: '6.25em',
    display: 'grid',
    placeItems: 'center',
  },
  priceContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#3f51b5',
    color: '#fafafa',
    padding: theme.spacing(0.7, 1),
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
    // background: '#f7f7f7',
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
  rightBtns: {
    display: 'flex',
    // justifyContent: 'space-between',
    alignItems: 'center',
    gap: theme.spacing(1.4),
    [theme.breakpoints.down('sm')]: {
      gap: theme.spacing(1),
    },
  },
  btnRoot: {
    minWidth: 0,
  },
}));

const CartItem = ({
  id,
  image,
  title,
  price,
  qty,
  increase,
  decrease,
  removeItem,
}) => {
  const [showModal, setShowModal] = useState(false);
  const classes = useStyles();

  const totalPrice = (qty * price).toFixed(2);

  return (
    <Card>
      <CardMedia
        image={image}
        alt={title}
        className={classes.media}
        classes={{
          root: classes.media,
        }}
        onClick={() => setShowModal(true)}
      />
      <CardContent className={classes.title}>
        <Typography variant="h6" align="center">
          {title}
        </Typography>
      </CardContent>
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
        <Typography variant="h6">Quantity:</Typography>
        <div className={classes.rightBtns}>
          <CustomTooltip title="Remove one item from cart">
            <Button
              type="button"
              onClick={() => decrease(id)}
              variant="outlined"
              disabled={qty <= 1}
              className={classes.btnDel}
              classes={{ root: classes.btnRoot }}
              aria-label="remove one item from cart"
              component="span"
            >
              <RemoveIcon />
            </Button>
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
              classes={{ root: classes.btnRoot }}
              aria-label="add one more item to cart"
            >
              <AddIcon />
            </Button>
          </CustomTooltip>
        </div>
      </CardActions>
      <Divider variant="fullWidth" />
      <Button
        variant="contained"
        type="button"
        color="secondary"
        onClick={() => removeItem(id)}
        startIcon={<DeleteIcon />}
        aria-label="remove item from cart"
        size="large"
        fullWidth
      >
        Remove
      </Button>
      {showModal && (
        <Modal showModal={showModal} setShowModal={setShowModal} img={image} />
      )}
    </Card>
  );
};

export default CartItem;
