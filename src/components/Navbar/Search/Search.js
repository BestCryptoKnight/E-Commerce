import { TextField } from '@material-ui/core';
// import SearchIcon from '@material-ui/icons/Search';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import allActions from '../../../store/actions';
import useStyles from './styles';

const selectProducts = (state) => state.products.products;
const selectQuery = (state) => state.products.query;

const Search = memo(() => {
  const products = useSelector(selectProducts);
  const query = useSelector(selectQuery);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleChangeSelect = (e, value) => {
    value
      ? dispatch(allActions.productsActions.setSearchValue(value))
      : dispatch(allActions.productsActions.setSearchValue(''));
  };

  const options = products
    .map((product) => product.title)
    .sort((a, b) => a.localeCompare(b));

  return (
    <div className={classes.search}>
      <Autocomplete
        freeSolo
        id="search autocomplete"
        selectOnFocus
        size="small"
        autoComplete
        clearOnEscape
        clearOnBlur
        fullWidth
        options={options}
        classes={{
          clearIndicator: classes.indicator,
        }}
        onChange={handleChangeSelect}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search products..."
            variant="outlined"
            InputProps={{ ...params.InputProps }}
            value={query}
          />
        )}
      />
    </div>
  );
});

export default Search;
