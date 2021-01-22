import { Chip } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import { useState } from 'react';
import { CustomTooltip } from '../../../components';
import useStyles from './styles';

const Chips = ({ products, setFilteredProducts }) => {
  const [value, setValue] = useState('All');
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
    setValue(clickedCategory);
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
              className={value === category ? classes.activeChip : classes.chip}
              variant="outlined"
              color="primary"
            />
          </CustomTooltip>
        </li>
      ))}
    </Paper>
  );
};

export default Chips;
