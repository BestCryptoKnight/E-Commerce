import { Chip } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';

const url = 'https://fakestoreapi.com/products/categories';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
    fontSize: '0.925rem',
  },
}));

const Chips = ({ products, setFilteredPrice }) => {
  const [categories, setCategories] = useState([
    ...new Set(products.map((product) => product.category)),
    'All',
  ]);
  const classes = useStyles();
  const [chipData, setChipData] = useState([
    { key: 0, label: 'electronics' },
    { key: 1, label: 'jewelery' },
    { key: 2, label: 'men clothing' },
    { key: 3, label: 'women clothing' },
  ]);

  /*   const handleDelete = (chipToDelete) => () =>
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    ); */

  const handleClick = (clickedCategory) => {
    console.log(clickedCategory);
    if (clickedCategory !== 'All') {
      products.filter((product) => product.category === clickedCategory);
    }
    setFilteredPrice(products);
  };

  return (
    // Boolean(categories.length) &&
    <Paper component="ul" className={classes.root}>
      {categories.map((category) => (
        <li key={category}>
          <Chip
            avatar={<Avatar>{category.charAt(0).toUpperCase()}</Avatar>}
            label={category}
            onClick={() => handleClick(category)}
            className={classes.chip}
            variant="outlined"
            color="primary"
            classes={{
              label: classes.chip,
            }}
          />
        </li>
      ))}

      {/*       {chipData.map((data) => {
        let icon;

        if (data.label === 'women clothing') {
          icon = <TagFacesIcon />;
        }

        return (
          <li key={data.key}>
            <CustomTooltip title={`Remove ${data.label} category`}>
              <Chip
                icon={icon}
                label={data.label}
                onDelete={data.label === 'All' ? undefined : handleDelete(data)}
                className={classes.chip}
              />
            </CustomTooltip>
          </li>
        );
      })} */}
    </Paper>
  );
};

export default Chips;
