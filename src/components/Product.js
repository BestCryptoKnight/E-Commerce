import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AddShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 366,
    paddingTop: '56.25%',
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
    justifyContent: 'space-evenly',
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

const Product = ({ id, title, price, description, category, image, qty }) => {
  const classes = useStyles();
  const { addToCart } = useCartContext();

  return (
    <Card className={classes.root}>
      <Link to="/checkout">
        <CardMedia className={classes.media} image={image} title={title} />
      </Link>
      <CardContent className={classes.cardContent}>
        {/* <div className={classes.titleContainer}> */}
        <Grid container justify="space-between" align="center" spacing={2}>
          <Grid item xs={12}>
            <Typography /* gutterBottom  */ variant="h5" component="h2">
              {title}
            </Typography>
          </Grid>
          <Grid item xs={6} /* sm={6} */>
            <Typography /* gutterBottom  */ variant="h6" component="h3">
              €{price.toFixed(2)}
            </Typography>
            {/*             <Typography gutterBottom  variant="h6" component="p">
              {category}
            </Typography> */}
          </Grid>
          <Grid item xs={6} /* sm={6} */>
            <Typography /* gutterBottom  */ variant="subtitle1" component="h4">
              {category}
            </Typography>
          </Grid>

          {/* <Divider light variant="fullWidth" flexItem /> */}
        </Grid>
        {/* </div> */}
        <Divider /* light */ />
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
          <Typography
            variant="button"
            display="block"
            color="textPrimary"
            aria-label="Add to Cart"
          >
            Add to cart
          </Typography>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
