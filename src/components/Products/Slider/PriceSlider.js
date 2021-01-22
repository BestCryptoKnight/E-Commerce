import { Slider, Typography } from '@material-ui/core';
import useStyles from './styles';

const PriceSlider = ({ min = 10, max = 150, filterPrice, setFilterPrice }) => {
  const classes = useStyles();

  const valuetext = (filterPrice) => `${filterPrice} €`;

  const handleChange = (event, newValue) => {
    setFilterPrice(newValue);
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
      <Typography id="range-slider" align="center" gutterBottom>
        Choose price range:
      </Typography>
      <Slider
        className={classes.slider}
        value={filterPrice}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        marks={marks}
        min={min}
        max={max}
        step={1}
        classes={{
          markLabel: classes.slider,
        }}
      />
    </div>
  );
};

export default PriceSlider;
