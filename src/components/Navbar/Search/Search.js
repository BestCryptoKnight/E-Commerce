import { TextField } from '@material-ui/core';
// import SearchIcon from '@material-ui/icons/Search';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useProductsContext } from '../../../context/ProductsContext';
import useStyles from './styles';

const Search = () => {
  const classes = useStyles();
  // const inputRef = useRef(null);
  const { products, setSearchValue, query } = useProductsContext();

  const handleChangeSelect = (e, value) => {
    value ? setSearchValue(value) : setSearchValue('');
  };

  const handleChangeText = (e) => {
    setSearchValue(e.target.value);
  };

  // const handleClose = (e, reason) => {
  //   if (reason === 'blur') {
  //     setSearchTerm('');
  //   }
  //   console.log(reason);
  //   console.log(e.target.value);
  // };

  //autocomplete

  /*     const updateInput = async (input) => {
    const filtered = countryListDefault.filter(country => {
     return country.name.toLowerCase().includes(input.toLowerCase())
    })
    setInput(input);
    setCountryList(filtered);
 } */

  const options = products
    .map((product) => product.title)
    .sort((a, b) => a.localeCompare(b));

  // const options2 = products.sort((a, b) => a.title.localeCompare(b.title));

  // const options3 = products;

  // console.log(options);
  // console.log(options2);
  // console.log(options3);

  return (
    // <div className={classes.search}>
    /* <InputBase
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
      /> */

    <div className={classes.search}>
      {/* <div className={classes.searchIcon}>
        <SearchIcon />
      </div> */}
      <Autocomplete
        freeSolo
        id="search autocomplete"
        selectOnFocus
        size="small"
        autoComplete
        // blurOnSelect
        clearOnEscape
        clearOnBlur
        // inputValue={inputValue}
        fullWidth
        options={options}
        // classes={{
        //   inputRoot: classes.input,
        // }}
        // groupBy={(option) => option.category}
        // getOptionLabel={(option) => option.title}
        className={classes.input}
        onChange={handleChangeSelect}
        // value={query}
        // onClose={handleClose}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search products..."
            // margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps }}
            className={classes.input2}
            // onChange={handleChangeText}
            // value={query}
          />
        )}
      />
    </div>
    /* </div> */
  );
};

export default Search;
