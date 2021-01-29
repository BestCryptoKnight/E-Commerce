import { makeStyles } from '@material-ui/core/styles';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import SortIcon from '@material-ui/icons/Sort';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginLeft: theme.spacing(1),
    minWidth: 160,
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
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
    padding: theme.spacing(0, 1.25, 0, 0),
    paddingLeft: 0,
  },
  btnGroup: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));

const SortButtons = ({ sortStatus, setSortStatus }) => {
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

  return (
    <ToggleButtonGroup
      value={sortStatus}
      exclusive
      onChange={handleSort}
      aria-label="sort buttons"
      className={classes.btnGroup}
    >
      <ToggleButton
        value="highLow"
        aria-label="sort high to low"
        className={classes.toggleBtn}
        title="Sort high to low"
      >
        Sort high to low
        <ArrowRightAltIcon className={classes.arrow} color="primary" />
        <SortIcon color="primary" />
      </ToggleButton>
      <ToggleButton
        value="lowHigh"
        aria-label="sort low to high"
        className={classes.toggleBtn}
        title="Sort low to high"
      >
        Sort low to high
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
    </ToggleButtonGroup>
  );
};

export default SortButtons;
