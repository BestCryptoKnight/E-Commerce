import { Button, Paper, Typography } from '@material-ui/core';
import { Home } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { Spinner } from './../../../components';
// import Spinner from '../../Spinner/Spinner';
import useStyles from './styles';

const Successful = ({ handleReset, isFinished }) => {
  const classes = useStyles();

  return (
    <>
      {!isFinished ? (
        <Spinner />
      ) : (
        <Paper variant="outlined" className={classes.paper}>
          <Typography variant="h6" gutterBottom>
            Thank you for you purchase!
          </Typography>
          <Button
            component={Link}
            to="/"
            size="large"
            type="button"
            variant="contained"
            color="primary"
            aria-label="Go homepage"
            startIcon={<Home />}
            onClick={handleReset}
          >
            Back to homepage
          </Button>
        </Paper>
      )}
    </>
  );
};

export default Successful;
