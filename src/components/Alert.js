import { makeStyles } from '@material-ui/core/styles';
import CheckIcon from '@material-ui/icons/Check';
import ErrorIcon from '@material-ui/icons/Error';
import Alert from '@material-ui/lab/Alert';
import { useEffect } from 'react';
import { useCartContext } from '../context/CartContext';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    margin: theme.spacing(1, 0),
    textAlign: 'center',
    display: 'grid',
    placeItems: 'center',
    zIndex: theme.zIndex.snackbar,
    [theme.breakpoints.down('xs')]: {
      display: 'block',
      margin: 0,
    },
  },
}));

const IconAlert = () => {
  const classes = useStyles();
  const { alert, setAlert } = useCartContext();

  useEffect(() => {
    const timeout = setTimeout(
      () => setAlert({ show: false, type: '', msg: '' }),
      3000
    );
    return () => clearTimeout(timeout);
  }, [setAlert]);

  const iconPick =
    alert.type === 'success' ? (
      <CheckIcon fontSize="inherit" />
    ) : (
      <ErrorIcon fontSize="inherit" />
    );

  return (
    <div className={classes.root}>
      <Alert icon={iconPick} severity={alert.type} variant="filled">
        {alert.msg}!
      </Alert>
    </div>
  );
};

export default IconAlert;
