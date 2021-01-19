import { FormControl, InputLabel, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SortIcon from '@material-ui/icons/Sort';
import selectItems from '../utils';

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginLeft: theme.spacing(1),
    minWidth: 160,
    // [theme.breakpoints.down('xs')]: {
    //   display: 'none',
    // },
  },
  select: {
    [theme.breakpoints.down('xs')]: {
      // minWidth: '60vw',
    },
    // padding: theme.spacing(0),
    // margin: theme.spacing(0),
  },
}));

const SortSelect = ({
  sortStatus,
  setSortStatus,
  fullWidth = false,
  margin = 'none',
}) => {
  /* const [categories, setCategories] = useState(['All']); */
  // const [checked, setChecked] = useState(false);
  const classes = useStyles();

  // const handleCheck = (event) => {
  //   setChecked(event.target.checked);
  // };

  const handleChange = (e) => {
    setSortStatus(e.target.value);
  };

  return (
    <FormControl
      className={classes.formControl}
      variant="outlined"
      margin={margin}
      fullWidth={fullWidth}
      size="medium"
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

export default SortSelect;
