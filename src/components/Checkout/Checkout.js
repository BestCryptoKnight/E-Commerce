import { Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { BillingForm, Confirmation, Steps, Successful } from '../../components';
import useStyles from './styles';

const steps = ['Billing information', 'Review and confirmation'];

const selectPrice = (state) => state.cart.totalPrice;

const Checkout = () => {
  const totalPrice = useSelector(selectPrice);
  const [isFinished, setIsFinished] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [userBilling, setUserBilling] = useState({});
  const [shippingOption, setShippingOption] = useState(5);
  const classes = useStyles();

  const timeout = () =>
    setTimeout(() => {
      setIsFinished(true);
    }, 2000);

  const totalSteps = () => steps.length;
  const isLastStep = () => activeStep === totalSteps() - 1;
  const isOver = () => activeStep === totalSteps();
  const isFirst = activeStep === 0;

  const handleNext = () => {
    if (isLastStep()) {
      timeout();
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = useCallback(() => {
    setActiveStep(0);
  }, []);

  return (
    <section className={classes.root}>
      <Steps activeStep={activeStep} steps={steps} />
      {isOver() ? (
        <div className={classes.successContainer}>
          <Successful
            handleReset={handleReset}
            isFinished={isFinished}
            setIsFinished={setIsFinished}
          />
        </div>
      ) : (
        <div className={classes.forms}>
          {activeStep === 0 ? (
            <BillingForm
              handleNext={handleNext}
              setUserBilling={setUserBilling}
              shippingOption={shippingOption}
              setShippingOption={setShippingOption}
            />
          ) : (
            <Confirmation userBilling={userBilling} />
          )}
        </div>
      )}
      {isLastStep() && (
        <div className={classes.btnContainer}>
          <Button
            disabled={isFirst}
            onClick={handleBack}
            startIcon={<ArrowBackIcon />}
            className={classes.backButton}
            size="large"
          >
            Back
          </Button>
          <Button
            variant="contained"
            type="submit"
            color="primary"
            onClick={handleNext}
            endIcon={<ArrowForwardIcon />}
            size="large"
          >
            Pay {(totalPrice + shippingOption).toFixed(2)} €
          </Button>
        </div>
      )}
    </section>
  );
};

export default Checkout;
