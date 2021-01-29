import { Chip } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CustomTooltip } from '../../../components';
import allActions from '../../../store/actions';
import useStyles from './styles';

const selectProducts = (state) => state.products.products;

const Chips = memo(
  ({ setFilteredProducts, selectedCategory, setSelectedCategory }) => {
    const products = useSelector(selectProducts);
    const dispatch = useDispatch();
    const classes = useStyles();

    const uniqueCategories = [
      ...new Set(products.map((product) => product.category)),
    ];

    const categoriesSorted = [
      'All',
      ...uniqueCategories.sort((a, b) => a.localeCompare(b)),
    ];

    const handleClick = (clickedCategory) => {
      clickedCategory === 'All'
        ? setFilteredProducts(products)
        : setFilteredProducts(
            products.filter((product) => product.category === clickedCategory)
          );
      setSelectedCategory(clickedCategory);
      dispatch(allActions.productsActions.setSearchValue(''));
    };

    return (
      <Paper component="ul" className={classes.root}>
        {categoriesSorted.map((category) => (
          <li key={category}>
            <CustomTooltip title={`Show ${category}`}>
              <Chip
                avatar={<Avatar>{category.charAt(0).toUpperCase()}</Avatar>}
                label={category}
                onClick={() => handleClick(category)}
                className={
                  selectedCategory === category
                    ? classes.activeChip
                    : classes.chip
                }
                variant="outlined"
                color="primary"
              />
            </CustomTooltip>
          </li>
        ))}
      </Paper>
    );
  }
);

export default Chips;
