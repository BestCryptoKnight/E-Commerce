import {
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useCartContext } from '../context/CartContext';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(0.25, 4, 2),
    marginTop: theme.spacing(1.5),
  },
  title: {
    margin: theme.spacing(1.25, 0),
  },
  productItem: {
    padding: theme.spacing(0.2, 1),
    flexWrap: 'wrap',
    border: '1px solid #e6e6e6',
    '&:nth-of-type(even)': {
      backgroundColor: 'rgba(0, 0, 0,0.04)',
    },
    '&:not(:last-of-type)': {
      borderBottomWidth: 0,
    },
  },
  total: {
    padding: theme.spacing(0.8),
    border: '3px double #d6d6d6',
  },
}));

const Review = ({ shippingOption }) => {
  const { cart, totalPrice, amount } = useCartContext();
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
export default Review;
