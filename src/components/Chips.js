import { Chip } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import { fade, makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { CustomTooltip } from '../components';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  activeChip: {
    background: `${fade(theme.palette.primary.main, 0.85)} !important`,
    margin: theme.spacing(0.5),
    fontSize: '0.925rem',
    color: theme.palette.grey['50'],
  },
  chip: {
    margin: theme.spacing(0.5),
    fontSize: '0.925rem',
  },
}));

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
