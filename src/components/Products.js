import { Button, Container, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import { useProductsContext } from '../context/ProductsContext';
import Chips from './Chips';
import PriceSlider from './PriceSlider';
import Product from './Product';
import Spinner from './Spinner';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#f2f3f3',
    padding: theme.spacing(1),
    /* margin: '0 auto', */
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: '100vh',
    width: '100%',
    gap: '0.75em',

    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(1, 12),
    },
  },
  button: {
    margin: theme.spacing(1),
  },
  paper: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5, 4),
    margin: 0,
  },
}));

// infinite scroll
const getPrice = (item) => item.price;

const Products = () => {
  /* const [loading, setLoading] = useState(false); */
  const { products, loading } = useProductsContext();
  const [filteredPrice, setFilteredPrice] = useState([0, 100000]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    setFilteredProducts(
      products.filter(
        (product) => product > filteredPrice[0] && product < filteredPrice[1]
      )
    );
    setFilteredProducts(products);
  }, [products, filteredPrice]);

  // filter components
  const minPrice = Math.min(...products.map(getPrice));
  const maxPrice = Math.max(...products.map(getPrice));

  /* const [productsToShow, setProductsToShow] = useState(products.slice(0, 5)); */

  /* const [next, setNext] = useState(5);
  const productsPerPage = 5;
  let arrayForHoldingProducts = [];

  const loopWithSlice = (start, end) => {
    const slicedPosts = products.slice(start, end);
    arrayForHoldingProducts = [...arrayForHoldingProducts, ...slicedPosts];
    setProductsToShow(arrayForHoldingProducts);
  };

  useEffect(() => {
    loopWithSlice(0, productsPerPage);
  }, []);

  const handleShowMorePosts = () => {
    loopWithSlice(next, next + productsPerPage);
    setNext(next + productsPerPage);
  }; */

  /* let showProducts = products.slice(0, start); */

  /* const handleClick = () => {
    const newNumber =start += productsPerPage;
    showProducts = 

  }; */

  return (
    <Container maxWidth="lg" className={classes.container}>
      {/* <Filter /> */}
      {loading ? (
        <Spinner />
      ) : (
        <>
          {/* <Container> */}
          <Chips />
          {/* </Container> */}
          <Container>
            <Paper component="ul" className={classes.paper}>
              <PriceSlider
                min={minPrice}
                max={maxPrice}
                filteredPrice={filteredPrice}
                setFilteredPrice={setFilteredPrice}
              />
            </Paper>
          </Container>
          <Grid container justify="center" spacing={4}>
            {filteredProducts.map((product) => (
              <Grid key={product.id} item xs={12} sm={6} md={4}>
                <Product product={product} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
      <Button
        variant="contained"
        color="primary" /* onClick={handleShowMorePosts} */
        aria-label="Show more"
        disabled={true}
      >
        Show More
      </Button>
    </Container>
  );
};

export default Products;
