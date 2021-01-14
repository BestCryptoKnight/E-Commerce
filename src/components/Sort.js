import { FormControl, InputLabel, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SortIcon from '@material-ui/icons/Sort';

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
    [theme.breakpoints.down('xs')]: {
      // minWidth: '60vw',
    },
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

  const handleChange = (e) => {
    setSortStatus(e.target.value);
  };

  return (
    /* Boolean(categories.length) && */ <FormControl
      className={classes.formControl}
      variant="outlined"
    >
      <InputLabel htmlFor="select-sort">Sort</InputLabel>
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
