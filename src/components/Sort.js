import { FormControl, InputLabel, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SortIcon from '@material-ui/icons/Sort';
import CustomTooltip from './CustomTooltip';

const url = 'https://fakestoreapi.com/products/categories';
//     background-color: #f2f3f3

const selectItems = [
  { id: 0, value: '', label: '' },
  { id: 1, value: 'highLow', label: 'Price high - low' },
  { id: 2, value: 'lowHigh', label: 'Price low - high' },
  { id: 3, value: 'category', label: 'Category' },
];

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 160,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  select: {
    // padding: theme.spacing(0),
    // margin: theme.spacing(0),
  },
}));

const Sort = ({ sortStatus, setSortStatus }) => {
  /* const [categories, setCategories] = useState(['All']); */
  // const [checked, setChecked] = useState(false);
  const classes = useStyles();

  // const handleCheck = (event) => {
  //   setChecked(event.target.checked);
  // };

  // tee buttonitega

  /* useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setCategories([...categories, ...data]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []); */

  // https://www.protest.eu/en/rw/category/men/

  const handleChange = (e) => {
    setSortStatus(e.target.value);
  };

  return (
    /* Boolean(categories.length) && */ <FormControl
      className={classes.formControl}
      variant="outlined"
    >
      <CustomTooltip title="Sort products by price or category">
        <InputLabel htmlFor="select-sort">Sort</InputLabel>
      </CustomTooltip>
      <Select
        native
        label="Sort"
        value={sortStatus}
        onChange={handleChange}
        className={classes.select}
        inputProps={{
          name: 'sort',
          id: 'select-sort',
        }}
        IconComponent={SortIcon}
      >
        {selectItems.map(({ id, value, label }) => (
          <option key={id} value={value}>
            {/* <Checkbox
              checked={checked}
              onChange={handleCheck}
              inputProps={{ 'aria-label': 'checkbox' }}
            /> */}
            {label}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default Sort;

{
  /* <div>
        <label htmlFor="filter-select">Choose to filter products:</label>
        <select onChange={handleStatus} name="filter" id="filter-select">
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div> */
}
