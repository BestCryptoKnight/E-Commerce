import { Button, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Home } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';

const useStyles = makeStyles((theme) => ({
  // container: {
  //   minHeight: '80vh',
  // },
  paper: {
    display: 'grid',
    placeItems: 'center',
    height: 155,
    width: 700,
    // minWidth: 256,
    padding: theme.spacing(3),
    margin: theme.spacing(1.5, 0),
    whiteSpace: 'nowrap',
    [theme.breakpoints.only('xs')]: {
      width: '96vw',
    },
  },
}));

const Successful = ({ handleReset, isFinished }) => {
  const classes = useStyles();

  return (
    // <Grid
    //   container
    //   direction="column"
    //   alignItems="center"
    //   justify="center"
    //   className={classes.container}
    // >
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

    // </Grid>
  );
};

export default Successful;
