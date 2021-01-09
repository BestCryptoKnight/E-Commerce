import { Slider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
  },
}));

const PriceSlider = ({ min = 10, max = 150 }) => {
  const classes = useStyles();
  const [value, setValue] = useState([20, 37]);

  const valuetext = (value) => `${value} €`;
  const handleChange = (event, newValue) => {
    setValue(newValue);
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
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        // step={0.00000001}
        marks={marks}
        min={min}
        max={max}
        step={10}
      />
    </div>
  );
};

export default PriceSlider;
