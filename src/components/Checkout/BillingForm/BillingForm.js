import {
  Button,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  Paper,
  Select,
  Typography,
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { FormProvider, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import formInputs from '../../../utils/formInputs';
import FormInput from './FormInput';
import useStyles from './styles';

const BillingForm = ({
  handleNext,
  setUserBilling,
  shippingOption,
  setShippingOption,
}) => {
  const classes = useStyles();
  const methods = useForm();
  const { handleSubmit } = methods;
  const history = useHistory();

  const handleClick = () => history.goBack();

  const handleForm = (data, e) => {
    e.preventDefault();
    setUserBilling({ ...data, shippingOption });
    handleNext();
  };

  return (
    <Paper variant="outlined" className={classes.paper}>
      <Typography variant="h6" align="center" style={{ marginBottom: '0.8em' }}>
        Step 1: Select billing information...
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleForm)}>
          <Grid container spacing={3}>
            {formInputs.map((item) => (
              <FormInput key={item.id} {...item} />
            ))}
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="outlined" fullWidth size="medium">
                <InputLabel htmlFor="select-delivery">Delivery</InputLabel>
                <Select
                  native
                  id="select-delivery"
                  label="Delivery"
                  value={shippingOption}
                  onChange={(e) => setShippingOption(+e.target.value)}
                >
                  <option value={5}>Standard (up to 7 days)&nbsp; +5 € </option>
                  <option value={10}>
                    Express&nbsp;&nbsp;&nbsp;(up to 3 days)&nbsp; +10 €
                  </option>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              container
              justify="center"
              alignItems="center"
              className={classes.btnContainer}
            >
              <Button
                onClick={handleClick}
                size="large"
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
                size="large"
                endIcon={<ArrowForwardIcon />}
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </Paper>
  );
};

export default BillingForm;
