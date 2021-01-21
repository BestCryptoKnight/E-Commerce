import {
  Button,
  Container,
  Divider,
  Grid,
  Hidden,
  Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useCallback, useEffect, useState } from 'react';
import {
  Chips,
  PriceSlider,
  Product,
  SortSelect,
  Spinner,
} from '../components';
import { useProductsContext } from '../context/ProductsContext';
import {
  getPrice,
  sortAlphabetically,
  sortHighLow,
  sortLowHigh,
} from '../utils/productSortHelpers';

const useStyles = makeStyles((theme) => ({
  container: {
    flexGrow: 1,
    backgroundColor: '#f2f3f3',
    padding: theme.spacing(1, 2),
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: '92vh',
    width: '100%',
    gap: '0.6em',
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
    padding: theme.spacing(1, 4),
    // margin: theme.spacing(0.5, 0),
  },
}));

// infinite scroll
// category for products

const Products = () => {
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
            {/* <Hidden smUp>
              <Paper className={classes.paper}>
                <SortButtons
                  sortStatus={sortStatus}
                  setSortStatus={setSortStatus}
                />
                <SortSelect
                  sortStatus={sortStatus}
                  setSortStatus={setSortStatus}
                />
              </Paper>
            </Hidden> */}
            {/* <Divider light /> */}
            <Paper className={classes.paper}>
              <PriceSlider
                min={minPrice}
                max={maxPrice}
                filterPrice={filterPrice}
                setFilterPrice={setFilterPrice}
              />
              <Hidden only="xs">
                <Divider orientation="vertical" flexItem />
                <SortSelect
                  sortStatus={sortStatus}
                  setSortStatus={setSortStatus}
                />
              </Hidden>
            </Paper>
            {/* <Divider light /> */}
            <Hidden smUp>
              {/* <Paper className={classes.paper}> */}
              {/* <Typography>Sort:</Typography> */}
              <SortSelect
                sortStatus={sortStatus}
                setSortStatus={setSortStatus}
                fullWidth={true}
                margin="dense"
              />
              {/* <SortSelect
                  sortStatus={sortStatus}
                  setSortStatus={setSortStatus}
                /> */}
              {/* </Paper> */}
            </Hidden>
          </Container>
          <Grid container justify="center" spacing={3}>
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
