import { Button, Paper, Typography } from '@material-ui/core';
import NextWeekIcon from '@material-ui/icons/NextWeek';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const EmptyCart = () => {
  const classes = useStyles();

  return (
    <Paper elevation={2} className={classes.paper}>
      <Typography variant="subtitle1">
        You have no items in your shopping cart!
      </Typography>
      <Button
        component={Link}
        to="/"
        size="large"
        type="button"
        variant="contained"
        color="primary"
        startIcon={<NextWeekIcon />}
        aria-label="Go to products page"
        className={classes.link}
      >
        Start adding some!
      </Button>
    </Paper>
  );
};

export default EmptyCart;
