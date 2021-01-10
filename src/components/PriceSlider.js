import { Slider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
  },
}));

const PriceSlider = ({
  min = 10,
  max = 150,
  filteredPrice,
  setFilteredPrice,
}) => {
  const classes = useStyles();
  // const [value, setValue] = useState([min, max]);
  // const {} = useProductsContext();

  const valuetext = (filteredPrice) => `${filteredPrice} €`;
  const handleChange = (event, newValue) => {
    setFilteredPrice(newValue);
  };

  const marks = [
    {
      value: min,
      label: `${min} €`,
    },
    {
      value: max,
      label: `${max} €`,
    },
  ];

  // custom label € märgiga
  // functionality filter products by slider

  return (
    <div className={classes.root}>
      <Typography id="range-slider" align="center" /* gutterBottom */>
        Price range
      </Typography>
      <Slider
        value={filteredPrice}
        onChange={handleChange}
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        marks={marks}
        min={min}
        max={max}
        step={10}
      />
    </div>
  );
};

export default PriceSlider;
