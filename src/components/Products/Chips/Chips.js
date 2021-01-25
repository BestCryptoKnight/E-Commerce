import { Chip } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import { memo } from 'react';
import { CustomTooltip } from '../../../components';
import { useProductsContext } from '../../../context/ProductsContext';
import useStyles from './styles';

const Chips = memo(
  ({ setFilteredProducts, selectedCategory, setSelectedCategory }) => {
    const { setSearchValue, products } = useProductsContext();
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
      setSearchValue('');
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
