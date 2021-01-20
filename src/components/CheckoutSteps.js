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
    margin: theme.spacing(1),
    padding: theme.spacing(1, 1, 2),
  },
  forms: {
    margin: theme.spacing(1, 'auto'),
    padding: theme.spacing(1, 2),
    maxWidth: 567,
  },
  instructions: {
    margin: theme.spacing(1, 0),
  },
}));

const steps = ['Billing information', 'Review and confirmation'];

const CheckoutSteps = () => {
  const { totalPrice } = useCartContext();
  const [isFinished, setIsFinished] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [userBilling, setUserBilling] = useState([]);
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
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
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
            />
          ) : (
            <Confirmation />
          )}
        </div>
      )}
      {isLastStep() && (
        <div className={classes.instructionContainer}>
          <Button
            disabled={isFirst}
            onClick={handleBack}
            startIcon={<ArrowBackIcon />}
            className={classes.backButton}
            // size="large"
          >
            Back
          </Button>
          <Button
            variant="contained"
            type="submit"
            color="primary"
            onClick={handleNext}
            endIcon={<ArrowForwardIcon />}
            // size="large"
          >
            Pay {totalPrice} €
          </Button>
        </div>
      )}
    </section>
  );
};

export default CheckoutSteps;
