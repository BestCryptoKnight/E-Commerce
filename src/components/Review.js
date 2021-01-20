import {
  Divider,
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
    padding: theme.spacing(1, 4),
    marginTop: theme.spacing(2),
  },
  title: {
    margin: theme.spacing(1, 0),
  },
  productItem: {
    padding: theme.spacing(1, 0),
    flexWrap: 'wrap',
    // borderBottom: '1px solid #b8b8b8',
    // '&:last-of-type': {
    //   border: 'none !important',
    // },
  },
  total: {
    padding: theme.spacing(1, 0),
  },
}));

const Review = () => {
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
            <Typography variant="subtitle2">
              {(qty * price).toFixed(2)} €
            </Typography>
          </ListItem>
        ))}
        <Divider component="li" />
        <ListItem className={classes.total}>
          <ListItemText primary="Total:" />
          <Typography variant="subtitle1">{totalPrice} €</Typography>
        </ListItem>
      </List>
    </Paper>
  );
};
export default Review;
