import { Button, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowBack } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '93vh',
  },
  paper: {
    display: 'grid',
    placeItems: 'center',
    height: 176,
    width: 500,
    padding: theme.spacing(3),
    whiteSpace: 'nowrap',
    [theme.breakpoints.only('xs')]: {
      width: '96vw',
    },
  },
}));

const Error = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => history.goBack();

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      component="section"
      className={classes.container}
    >
      <Paper elevation={2} className={classes.paper}>
        <Typography variant="h5">Sorry, no matching page!</Typography>
        <Button
          onClick={handleClick}
          size="large"
          type="button"
          variant="contained"
          color="primary"
          startIcon={<ArrowBack />}
          aria-label="Go back"
        >
          Go back
        </Button>
      </Paper>
    </Grid>
  );
};

export default Error;
