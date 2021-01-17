import {
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useCallback, useEffect, useState } from 'react';
import { Chips, PriceSlider, Product, Sort, Spinner } from '../components';
import { useProductsContext } from '../context/ProductsContext';
import {
  getPrice,
  sortAlphabetically,
  sortHighLow,
  sortLowHigh,
} from '../utils/productSortHelpers';

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
    alignItems: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(1.5, 4),
    margin: 0,
  },
  divider: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}));

// infinite scroll
// category for products

const Products = () => {
  /* const [loading, setLoading] = useState(false); */
  const { products, loading, query } = useProductsContext();
  const [filterPrice, setFilterPrice] = useState([0, Infinity]);
  const [filteredProducts, setFilteredProducts] = useState([...products]);
  const [sortStatus, setSortStatus] = useState('');
  const classes = useStyles();

  // filter components
  useEffect(() => {
    setFilteredProducts(
      products.filter(
        (product) =>
          product.price >= filterPrice[0] && product.price <= filterPrice[1]
      )
    );
  }, [products, filterPrice]);

  const [maxRange, setMaxRange] = useState(10);

  const showMoreProducts = useCallback(() => {
    setMaxRange((prevRange) => prevRange + 10);
  }, []);

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
        setFilteredProducts([...filteredProducts].sort(sortHighLow));
        break;
      case 'alphabetically':
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

  /*  if (loading) {
    return (
      <Grid container align="center" justify="center">
        <Spinner />
        <Typography>Tere</Typography>
      </Grid>
    );
  } */

  return (
    <Container maxWidth="lg" className={classes.container}>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Container disableGutters>
            <Chips
              products={products}
              setFilteredProducts={setFilteredProducts}
            />
          </Container>
          <Container disableGutters>
            <Paper className={classes.paper}>
              <PriceSlider
                min={minPrice}
                max={maxPrice}
                filterPrice={filterPrice}
                setFilterPrice={setFilterPrice}
              />
              <Divider
                orientation="vertical"
                flexItem
                className={classes.divider}
              />
              <div className="sortContainer">
                <Typography gutterBottom align="center">
                  {/* Sort: */}
                </Typography>
                <Sort sortStatus={sortStatus} setSortStatus={setSortStatus} />
              </div>
            </Paper>
          </Container>
          <Grid container justify="center" spacing={4}>
            {filteredProducts.slice(0, maxRange).map(
              (product) =>
                product.title.toLowerCase().includes(query.toLowerCase()) && (
                  <Grid key={product.id} item xs={12} sm={6} lg={4}>
                    <Product {...product} />
                  </Grid>
                )
            )}
          </Grid>
        </>
      )}
      {Boolean(filteredProducts.length) && (
        <Button
          variant="contained"
          color="primary"
          onClick={showMoreProducts}
          aria-label="Show more"
          disabled={maxRange >= filteredProducts.length}
        >
          Show More
        </Button>
      )}
    </Container>
  );
};

export default Products;
