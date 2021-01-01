import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import { makeStyles } from '@material-ui/core/styles';
import { useStoreContext } from '../context/StoreContext';

const url = 'https://fakestoreapi.com/products/categories';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Filter = () => {
  /* const [categories, setCategories] = useState(['All']); */
  const { filterStatus, setFilterStatus, categories } = useStoreContext();

  const classes = useStyles();

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

  const handleChange = (e) => setFilterStatus(e.target.value);

  return (
    categories.length > 0 && (
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="category-helper">Category</InputLabel>
        <NativeSelect
          value={filterStatus}
          onChange={handleChange}
          inputProps={{
            name: 'category',
            id: 'category-helper',
          }}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </NativeSelect>
        <FormHelperText>Choose Category</FormHelperText>
      </FormControl>
    )
  );
};

export default Filter;

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
