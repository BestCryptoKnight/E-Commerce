import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  Select,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import formInputs from '../utils/formInputs';
import FormInput from './FormInput';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  btnContainer: {
    margin: theme.spacing(2.25, 0, 1),
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
}));

const AddressForm = ({ handleNext, setUserBilling }) => {
  const [shippingOption, setShippingOption] = useState('');
  const classes = useStyles();
  const methods = useForm();
  const { handleSubmit } = methods;
  const history = useHistory();

  const handleClick = () => history.goBack();

  const handleForm = async (data, e) => {
    e.preventDefault();
    setUserBilling(data);
    console.log(data);
    handleNext();
    // e.preventDefault();
    // setData(data1);
    // console.log(data1);
  };

  //shipping variant select

  return (
    <>
      <Typography variant="h6" align="center" style={{ marginBottom: '0.8em' }}>
        Step 1: Select billing information...
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleForm)}>
          <Grid container spacing={3}>
            {formInputs.map((item) => (
              <FormInput key={item.id} {...item} />
            ))}
          </Grid>
          <Grid item xs={12} sm={12}>
            <InputLabel htmlFor="shipping-options">Shipping option</InputLabel>
            <Select
              fullWidth
              native
              label="Shipping options"
              variant="outlined"
              labelId="shipping-options"
              id="shipping-options"
              inputProps={{
                name: 'options',
                id: 'shipping-options',
              }}
              value={shippingOption}
              fullWidth
              onChange={(e) => setShippingOption(e.target.value)}
            >
              <option aria-label="None" value="" />
              <option value={10}>Express</option>
              <option value={20}>Express+</option>
              {/* <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem> */}
            </Select>
          </Grid>
          <FormControl
            className={classes.formControl}
            variant="outlined"
            fullWidth
            size="medium"
          >
            <InputLabel htmlFor="select-sort">Sort</InputLabel>
            <Select
              native
              label="Sort"
              value={shippingOption}
              onChange={
                ((e) => setShippingOption(e.target.value),
                console.log(shippingOption))
              }
              // value={sortStatus}
              // onChange={handleChange}
              // className={classes.select}
              // classes={{
              //   outlined: classes.select,
              // }}
              inputProps={{
                name: 'sort',
                id: 'select-sort',
              }}
            >
              <option aria-label="None" value="" />
              <option value={10}>Express</option>
              <option value={20}>Express+</option>
            </Select>
          </FormControl>
          <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.btnContainer}
          >
            <Button
              onClick={handleClick}
              // size="large"
              type="button"
              // variant="contained"
              // color="primary"
              startIcon={<ArrowBackIcon />}
              aria-label="Go back"
              title="Go back"
              className={classes.backButton}
            >
              Back
            </Button>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              // size="large"
              endIcon={<ArrowForwardIcon />}
            >
              Next
            </Button>
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
