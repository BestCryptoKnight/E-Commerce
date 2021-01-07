import { Button, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowBack } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'grid',
    placeItems: 'center',
    height: 155,
    padding: theme.spacing(3),
    margin: theme.spacing(6, 0),
    whiteSpace: 'nowrap',
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
