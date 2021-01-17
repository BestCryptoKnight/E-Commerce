import { FormControl, InputLabel, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SortIcon from '@material-ui/icons/Sort';

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
  icon: {
    transform: 'rotate(180deg)',
  },
  arrow: {
    transform: 'rotate(90deg) translateY(-36%)',
  },
  arrow2: {
    transform: 'rotate(-90deg) translateY(36%)',
  },
  toggleBtn: {
    paddingLeft: 0,
  },
}));

const Sort = ({ sortStatus, setSortStatus }) => {
  /* const [categories, setCategories] = useState(['All']); */
  // const [checked, setChecked] = useState(false);
  const classes = useStyles();

  const handleSort = (event, newSort) => {
    setSortStatus(newSort);
  };

  // const handleCheck = (event) => {
  //   setChecked(event.target.checked);
  // };

  // tee buttonitega

  const handleChange = (e) => {
    setSortStatus(e.target.value);
  };

  return (
    <>
      {/*       <ToggleButtonGroup
        value={sortStatus}
        exclusive
        onChange={handleSort}
        aria-label="sort buttons"
      >
        <ToggleButton
          value="highLow"
          aria-label="sort high to low"
          className={classes.toggleBtn}
          title="Sort high to low"
        >
          <ArrowRightAltIcon className={classes.arrow} color="primary" />
          <SortIcon color="primary" />
        </ToggleButton>
        <ToggleButton
          value="lowHigh"
          aria-label="sort low to high"
          className={classes.toggleBtn}
          title="Sort low to high"
        >
          <ArrowRightAltIcon className={classes.arrow2} color="primary" />
          <SortIcon className={classes.icon} color="primary" />
        </ToggleButton>
        <ToggleButton
          value="alphabetically"
          aria-label="sort alphabetically"
          title="Sort alphabetically"
        >
          <SortByAlphaIcon color="primary" />
        </ToggleButton>
      </ToggleButtonGroup> */}
      <FormControl
        className={classes.formControl}
        variant="outlined"
        /* fullWidth */ margin="dense"
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
    </>
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
