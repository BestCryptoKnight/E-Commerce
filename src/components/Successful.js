import { Button, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Home } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '80vh',
  },
  paper: {
    display: 'grid',
    placeItems: 'center',
    height: 155,
    width: '60vw',
    maxWidth: 576,
    // minWidth: 256,
    padding: theme.spacing(3),
    margin: theme.spacing(2, 0),
    whiteSpace: 'nowrap',
    [theme.breakpoints.only('xs')]: {
      width: '96vw',
    },
  },
}));

const Successful = ({ handleReset }) => {
  const classes = useStyles();

  return (
    // <Grid
    //   container
    //   direction="column"
    //   alignItems="center"
    //   justify="center"
    //   className={classes.container}
    // >
    <Paper elevation={2} className={classes.paper}>
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
    // </Grid>
  );
};

export default Successful;
