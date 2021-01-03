import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AddShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useStoreContext } from '../context/StoreContext';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: '0',
    paddingTop: '56.25%',
    marginTop: '100',
    /*    transition: 'all 0.6s ease-out',
    '&:hover': {
      paddingTop: '78%',
      transform: 'scale(1.1)',
    }, */
  },
  cardContent: {
    paddingBottom: 0,
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  description: {
    marginTop: '0.5em',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    cursor: 'pointer',
  },
}));

const Product = ({ product }) => {
  const classes = useStyles();
  const { addToCart } = useStoreContext();

  const { id, title, price, description, category, image, qty } = product;

  /* const handleAddToCart = () => {addToCart, openSideBarCheckout()}; */
  //category
  //ALERT kui vajutab to cart!
  return (
    <Card className={classes.root}>
      <Link to="/error">
        <CardMedia className={classes.media} image={image} title={title} />
      </Link>
      <CardContent className={classes.cardContent}>
        <div className={classes.titleContainer}>
          <Typography gutterBottom variant="h5" component="h2">
            {title} {id}
          </Typography>
          <Divider light orientation="vertical" variant="middle" flexItem />
          <Typography gutterBottom variant="h6" component="h2">
            {price}€
          </Typography>
        </div>
        <Divider light />
        <Typography
          gutterBottom
          variant="body2"
          component="p"
          color="textSecondary"
          className={classes.description}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton
          aria-label="Add to Cart"
          onClick={() =>
            addToCart(id, title, price, description, category, image, qty)
          }
        >
          <Typography variant="button" display="block" color="textPrimary">
            Add to cart
          </Typography>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
