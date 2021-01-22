import {
  Button,
  Container,
  Divider,
  Grid,
  Hidden,
  Paper,
} from '@material-ui/core';
import { useCallback, useEffect, useState } from 'react';
import {
  Chips,
  PriceSlider,
  Product,
  SortSelect,
  Spinner,
} from '../../components';
import { useProductsContext } from '../../context/ProductsContext';
import {
  getPrice,
  sortAlphabetically,
  sortHighLow,
  sortLowHigh,
} from '../../utils/productSortHelpers';
import useStyles from './styles';

const Products = () => {
  const { products, loading, query } = useProductsContext();
  const [filterPrice, setFilterPrice] = useState([0, Infinity]);
  const [filteredProducts, setFilteredProducts] = useState([...products]);
  const [sortStatus, setSortStatus] = useState('');
  const [maxRange, setMaxRange] = useState(10);
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

  const showMoreProducts = useCallback(() => {
    setMaxRange((prevRange) => prevRange + 10);
  }, []);

  const queryMatch = (product) =>
    product.title.toLowerCase().includes(query.toLowerCase());

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
              <Paper elevation={0} className={classes.sortWrapper}>
                {/* <Typography>Sort:</Typography> */}
                <SortSelect
                  sortStatus={sortStatus}
                  setSortStatus={setSortStatus}
                  fullWidth
                  // margin="dense"
                />
              </Paper>
            </Hidden>
          </Container>
          <Grid container justify="center" spacing={3}>
            {filteredProducts.slice(0, maxRange).map(
              (product) =>
                queryMatch(product) && (
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
