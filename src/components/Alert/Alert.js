import CheckIcon from '@material-ui/icons/Check';
import ErrorIcon from '@material-ui/icons/Error';
import Alert from '@material-ui/lab/Alert';
import { useEffect } from 'react';
import { useCartContext } from '../../context/CartContext';
import useStyles from './styles';

const IconAlert = () => {
  const classes = useStyles();
  const {
    alert: { type, msg },
    setAlert,
  } = useCartContext();

  useEffect(() => {
    const timeout = setTimeout(
      () => setAlert({ show: false, type: '', msg: '' }),
      3000
    );
    return () => clearTimeout(timeout);
  }, [setAlert]);

  const iconPick =
    type === 'success' ? (
      <CheckIcon fontSize="inherit" />
    ) : (
      <ErrorIcon fontSize="inherit" />
    );

  return (
    <div className={classes.root}>
      <Alert icon={iconPick} severity={type} variant="filled">
        {msg}!
      </Alert>
    </div>
  );
};

export default IconAlert;
