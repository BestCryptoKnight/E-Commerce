import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useState } from 'react';
import Modal from '../components/Modal';
import { useCartContext } from '../context/CartContext';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 366,
    cursor: 'pointer',
    backgroundSize: 'contain',
  },
  cardContent: {
    paddingBottom: 0,
  },
  /*   titleContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  }, */
  description: {
    marginTop: '0.5em',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  accordion: {
    padding: theme.spacing(1, 2),
  },
}));

const Product = ({ id, title, price, description, category, image, qty }) => {
  const [showModal, setShowModal] = useState();
  const { addToCart } = useCartContext();
  const classes = useStyles();

  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  //breadCrumbs description

  return (
    <Card className={classes.root}>
      {/* <Link to={`/product/${id}`}> */}
      <CardMedia
        className={classes.media}
        classes={{
          root: classes.media,
        }}
        image={image}
        title={title}
        onClick={() => setShowModal(!showModal)}
      />
      {/* </Link> */}
      <CardContent className={classes.cardContent}>
        {/* <div className={classes.titleContainer}> */}
        <Grid container align="center" spacing={1}>
          <Grid item xs={12}>
            <Accordion
              expanded={expanded === 'panel1'}
              onChange={handleChange('panel1')}
              variant="outlined"
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
                expandIcon={<ExpandMoreIcon />}
                aria-label="Toggle product description"
                title="Click to toggle description"
              >
                <Typography variant="h6" component="h2">
                  {title}
                </Typography>
              </AccordionSummary>
              <Divider />
              <AccordionDetails className={classes.accordion}>
                <Typography
                  gutterBottom
                  variant="body2"
                  component="p"
                  color="textPrimary"
                  className={classes.description}
                  align="left"
                >
                  {description}
                </Typography>
              </AccordionDetails>
            </Accordion>
            {/* <Typography variant="h5" component="h2">
              {title}
            </Typography> */}
          </Grid>
          {/* <Grid item xs={12}>
            <Divider />
          </Grid> */}
          <Grid item xs={6}>
            <Typography
              gutterBottom
              variant="overline"
              component="p"
              // align="left"
              color="textPrimary"
            >
              {category}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              gutterBottom
              variant="h6"
              component="h3"
              // align="right"
              className={classes.price}
              title={price.toFixed(2)}
            >
              €{price.toFixed(2)}
            </Typography>
            {/*             <Typography gutterBottom  variant="h6" component="p">
              {category}
            </Typography> */}
          </Grid>

          {/* <Divider light variant="fullWidth" flexItem /> */}
        </Grid>
        {/* </div> */}
        <Divider />
        {/*       <Typography
          gutterBottom
          variant="body2"
          component="p"
          color="textSecondary"
          className={classes.description}
        >
          {description}
        </Typography> */}
      </CardContent>
      {/* <Divider /> */}
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
      {showModal && (
        <Modal showModal={showModal} setShowModal={setShowModal} img={image} />
      )}
    </Card>
  );
};

export default Product;
