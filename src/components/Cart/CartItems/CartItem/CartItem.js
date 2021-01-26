import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import RemoveIcon from '@material-ui/icons/Remove';
import { memo, useState } from 'react';
import { CustomTooltip, Modal } from '../../..';
import useStyles from './styles';

const CartItem = memo(
  ({ id, image, title, price, qty, increase, decrease, removeItem }) => {
    const [showModal, setShowModal] = useState(false);
    const classes = useStyles();

    const totalPrice = (qty * price).toFixed(2);

    return (
      <Card raised>
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
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            img={image}
          />
        )}
      </Card>
    );
  }
);

export default CartItem;
