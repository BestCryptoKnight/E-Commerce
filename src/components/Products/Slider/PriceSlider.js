import { Slider, Typography } from '@material-ui/core';
import { memo } from 'react';
import useStyles from './styles';

const PriceSlider = memo(
  ({ min = 10, max = 150, filterPrice, setFilterPrice }) => {
    const classes = useStyles();

    const valuetext = (filterPrice) => `${filterPrice} €`;

    const handleChange = (event, newValue) => {
      setFilterPrice(newValue);
    };

    const minRoundedValue = Math.floor(min);
    const maxRoundedValue = Math.ceil(max);
    const sumMaxMin = max + min;
    const thirdValue = sumMaxMin / 3;
    const twoThirdsValue = thirdValue * 2;

    const marks = [
      {
        value: minRoundedValue,
        label: `${minRoundedValue} €`,
      },
      {
        value: thirdValue || 335,
        label: `${Math.floor(thirdValue)} €`,
      },
      {
        value: twoThirdsValue,
        label: `${Math.ceil(twoThirdsValue)} €`,
      },
      {
        value: maxRoundedValue,
        label: `${maxRoundedValue} €`,
      },
    ];

    // custom label € märgiga
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
          min={minRoundedValue}
          max={maxRoundedValue}
          step={1}
          classes={{
            markLabel: classes.slider,
          }}
        />
      </div>
    );
  }
);

export default PriceSlider;
