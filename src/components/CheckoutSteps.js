import { Button, Step, StepLabel, Stepper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useState } from 'react';
import { AddressForm, Confirmation, Successful } from '../components';
import { useCartContext } from '../context/CartContext';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructionContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: theme.spacing(2.5),
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: theme.spacing(1, 'auto'),
    padding: theme.spacing(1, 0),
    maxWidth: 700,
  },
  forms: {
    margin: theme.spacing(0, 'auto'),
    maxWidth: 700,
  },
  instructions: {
    margin: theme.spacing(1, 0),
  },
  whiteBg: {
    background: 'white',
  },
  stepper: {
    maxWidth: 700,
    margin: '0 auto',
    paddingBottom: theme.spacing(1.5),
  },
}));

const steps = ['Billing information', 'Review and confirmation'];

const CheckoutSteps = () => {
  const { totalPrice } = useCartContext();
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

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <section className={classes.root}>
      <Stepper
        elevation={2}
        variant="outlined"
        activeStep={activeStep}
        alternativeLabel
        className={classes.stepper}
      >
        {steps.map((step) => (
          <Step key={step}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {isOver() ? (
        <div className={classes.instructionContainer}>
          <Successful
            handleReset={handleReset}
            isFinished={isFinished}
            setIsFinished={setIsFinished}
          />
        </div>
      ) : (
        <div className={classes.forms}>
          {activeStep === 0 ? (
            <AddressForm
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

export default CheckoutSteps;
