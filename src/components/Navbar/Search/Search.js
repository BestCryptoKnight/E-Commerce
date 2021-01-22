import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { useRef } from 'react';
import { useProductsContext } from '../../../context/ProductsContext';
import useStyles from './styles';

const Search = () => {
  const classes = useStyles();
  const inputRef = useRef(null);
  const { query, setQuery } = useProductsContext();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  //autocomplete

  /*     const updateInput = async (input) => {
    const filtered = countryListDefault.filter(country => {
     return country.name.toLowerCase().includes(input.toLowerCase())
    })
    setInput(input);
    setCountryList(filtered);
 } */

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search products…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
        autoComplete={query.toString()}
        autoFocus
        onChange={handleChange}
        value={query}
      />
    </div>
  );
};

export default Search;
