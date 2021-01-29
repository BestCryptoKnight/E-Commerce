import {
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import useStyles from './styles';

const selectCart = (state) => state.cart.cart;
const selectTotalPrice = (state) => state.cart.totalPrice;
const selectAmount = (state) => state.cart.amount;

const OrderReview = ({ shippingOption }) => {
  const cart = useSelector(selectCart);
  const totalPrice = useSelector(selectTotalPrice);
  const amount = useSelector(selectAmount);
  const classes = useStyles();

  return (
    <Paper className={classes.paper} variant="outlined">
      <Typography variant="h6" align="center" className={classes.title}>
        Order summary
      </Typography>
      <List disablePadding>
        {cart.map(({ id, title, qty, price }) => (
          <ListItem className={classes.productItem} key={id}>
            <ListItemText primary={title} secondary={`Quantity: ${qty}`} />
            <Typography variant="body1">
              {(qty * price).toFixed(2)} €
            </Typography>
          </ListItem>
        ))}
        <ListItem className={classes.total}>
          <ListItemText primary="Total:" secondary={`${amount} items`} />
          <ListItemText
            primary={`${(totalPrice + shippingOption).toFixed(2)} €`}
            secondary={`${shippingOption} € delivery fee included`}
            align="right"
          />
        </ListItem>
      </List>
    </Paper>
  );
};
export default OrderReview;
