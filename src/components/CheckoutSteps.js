import { Button, Step, StepLabel, Stepper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useState } from 'react';
import { AddressForm, Payment, Successful } from '../components';

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
    padding: theme.spacing(1),
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

const getSteps = () => ['Billing information', 'Payment'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Step 1: Select billing information...';
    case 1:
      return 'Step 2: Payment details';
    default:
      return 'Unknown step';
  }
}

const CheckoutSteps = () => {
  const [isFinished, setIsFinished] = useState(false);
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const steps = getSteps();

  const timeout = setTimeout(() => {
    setIsFinished(true);
  }, 2000);

  const totalSteps = () => steps.length;

  const isLastStep = () => activeStep === steps.length - 1;

  const isLastStep2 = activeStep === steps.length - 1;

  const handleNext = () => {
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
      {/* {activeStep >= totalSteps() && } */}
      <div className={classes.forms}>
        {activeStep === 0 ? <AddressForm /> : <Payment />}
      </div>
      {/* <Divider /> */}
      <div className={classes.instructionContainer}>
        {isLastStep() ? (
          <div>
            <Successful handleReset={handleReset} />
            {/*             <Typography className={classes.instructions}>
              Thank you for you purchase!
            </Typography> */}
          </div>
        ) : (
          <div>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              className={classes.backButton}
            >
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              endIcon={<ArrowForwardIcon />}
            >
              {isLastStep() ? 'Pay' : 'Next'}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CheckoutSteps;
