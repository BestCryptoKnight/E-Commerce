import { Step, StepLabel, Stepper } from '@material-ui/core';
import useStyles from './styles';

const Steps = ({ activeStep, steps }) => {
  const classes = useStyles();

  return (
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
  );
};

export default Steps;
