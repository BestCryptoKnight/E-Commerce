import {
  Button,
  Container,
  Divider,
  Fab,
  Grid,
  Hidden,
  Paper,
} from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { useCallback, useEffect, useState } from 'react';
import {
  Chips,
  PriceSlider,
  Product,
  ScrollTop,
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

const getLocalStorageRange = () =>
  localStorage.getItem('range')
    ? JSON.parse(localStorage.getItem('range'))
    : [0, Infinity];

const Products = () => {
  const { products, loading, query } = useProductsContext();
  const [filterPrice, setFilterPrice] = useState(getLocalStorageRange());
  const [filteredProducts, setFilteredProducts] = useState([...products]);
  const [sortStatus, setSortStatus] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [maxRange, setMaxRange] = useState(20);

  const classes = useStyles();

  // filter products
  const filterByPrice = useCallback(() => {
    const filteredListCategory = products.filter(
      ({ price, category }) =>
        price >= filterPrice[0] &&
        price <= filterPrice[1] &&
        category === selectedCategory
    );
    const filteredListAll = products.filter(
      ({ price }) => price >= filterPrice[0] && price <= filterPrice[1]
    );

    selectedCategory !== 'All'
      ? setFilteredProducts(filteredListCategory)
      : setFilteredProducts(filteredListAll);
  }, [selectedCategory, filterPrice, products]);

  useEffect(() => {
    filterByPrice();
    localStorage.setItem('range', JSON.stringify(filterPrice));
  }, [products, filterPrice, selectedCategory, filterByPrice]);

  // sort products
  useEffect(() => {
    switch (sortStatus) {
      case 'highLow':
        setFilteredProducts((prevProducts) =>
          [...prevProducts].sort(sortHighLow)
        );
        break;
      case 'lowHigh':
        setFilteredProducts((prevProducts) =>
          [...prevProducts].sort(sortLowHigh)
        );
        break;
      case 'alphabetically':
        setFilteredProducts((prevProducts) =>
          [...prevProducts].sort(sortAlphabetically)
        );
        break;
      default:
        setFilteredProducts((prevProducts) => prevProducts);
    }
  }, [sortStatus, selectedCategory]);

  // query
  const queryMatch = (product) =>
    product.title.toLowerCase().includes(query.toLowerCase());

  const arrayQueryLength = filteredProducts.filter((item) => queryMatch(item))
    .length;

  // max min
  const minPrice = Math.min(...products.map(getPrice));
  const maxPrice = Math.max(...products.map(getPrice));

  // show more button
  const showMoreProducts = useCallback(() => {
    setMaxRange((prevRange) => prevRange + 10);
  }, []);

  return (
    <Container maxWidth="lg" className={classes.container}>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Container disableGutters>
            <Chips
              id="back-to-top-anchor"
              setFilteredProducts={setFilteredProducts}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
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
            <Hidden smUp>
              <Paper elevation={0} className={classes.sortWrapper}>
                <SortSelect
                  sortStatus={sortStatus}
                  setSortStatus={setSortStatus}
                  fullWidth
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
      {Boolean(filteredProducts.length) && arrayQueryLength > 0 && (
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
      <ScrollTop>
        <Fab
          color="secondary"
          size="small"
          aria-label="scroll back to top"
          title="scroll back to top"
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Container>
  );
};

export default Products;
