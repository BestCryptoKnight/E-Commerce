import { Button, Container, Divider, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import { useProductsContext } from '../context/ProductsContext';
import {
  getPrice,
  sortAlphabetically,
  sortHighLow,
  sortLowHigh,
} from '../utils/productSortHelpers';
import Chips from './Chips';
import PriceSlider from './PriceSlider';
import Product from './Product';
import Sort from './Sort';
import Spinner from './Spinner';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#f2f3f3',
    padding: theme.spacing(1, 2),
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: '100vh',
    width: '100%',
    gap: '0.7em',

    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(1, 12),
    },
  },
  button: {
    margin: theme.spacing(1),
  },
  paper: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(1, 4),
    margin: 0,
  },
}));

// infinite scroll
// category for products

const Products = () => {
  /* const [loading, setLoading] = useState(false); */
  const { products, loading } = useProductsContext();
  const [filteredPrice, setFilteredPrice] = useState([0, Infinity]);
  const [filteredProducts, setFilteredProducts] = useState([...products]);
  const [sortStatus, setSortStatus] = useState('');
  const classes = useStyles();

  // filter components
  useEffect(() => {
    setFilteredProducts(
      products.filter(
        (product) =>
          product.price >= filteredPrice[0] && product.price <= filteredPrice[1]
      )
    );
  }, [products, filteredPrice]);

  // const switchStatement = useCallback(() => {
  //   switch (sortStatus) {
  //     case 'lowHigh':
  //       setFilteredProducts([...filteredProducts].sort(sortLowHigh));
  //       break;
  //     case 'highLow':
  //       const sorted = [...filteredProducts].sort(sortHighLow);
  //       setFilteredProducts(sorted);
  //       break;
  //     case 'category':
  //       setFilteredProducts([...filteredProducts].sort(sortAlphabetically));
  //       break;
  //     default:
  //       setFilteredProducts(filteredProducts);
  //   }
  // }, [filteredProducts, sortStatus]);

  // sort components
  useEffect(() => {
    switch (sortStatus) {
      case 'lowHigh':
        setFilteredProducts([...filteredProducts].sort(sortLowHigh));
        break;
      case 'highLow':
        const sorted = [...filteredProducts].sort(sortHighLow);
        setFilteredProducts(sorted);
        break;
      case 'category':
        setFilteredProducts([...filteredProducts].sort(sortAlphabetically));
        break;
      default:
        setFilteredProducts(filteredProducts);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortStatus]);

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
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Container disableGutters>
            <Chips />
          </Container>
          <Container disableGutters>
            <Paper component="ul" className={classes.paper}>
              <PriceSlider
                min={minPrice}
                max={maxPrice}
                filteredPrice={filteredPrice}
                setFilteredPrice={setFilteredPrice}
              />
              <Divider orientation="vertical" flexItem />
              <Sort sortStatus={sortStatus} setSortStatus={setSortStatus} />
            </Paper>
          </Container>
          <Grid container justify="center" spacing={4}>
            {filteredProducts.map((product) => (
              <Grid key={product.id} item xs={12} sm={6} lg={4}>
                <Product {...product} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
      <Button
        variant="contained"
        color="primary" /* onClick={handleShowMorePosts} */
        aria-label="Show more"
        disabled
      >
        Show More
      </Button>
    </Container>
  );
};

export default Products;
