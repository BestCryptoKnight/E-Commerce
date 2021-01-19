import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { useRef } from 'react';
import { useProductsContext } from '../context/ProductsContext';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.primary.main, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.primary.main, 0.22),
    },
    margin: theme.spacing(0, 2),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.primary.dark,
  },
  inputRoot: {
    color: 'inherit',
    // color: theme.palette.grey[50],
    // fontWeight: 'bold',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

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
