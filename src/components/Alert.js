import { makeStyles } from '@material-ui/core/styles';
import CheckIcon from '@material-ui/icons/Check';
import ErrorIcon from '@material-ui/icons/Error';
import Alert from '@material-ui/lab/Alert';
import { useEffect } from 'react';
import { useStoreContext } from '../context/StoreContext';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    top: '6.7vh',
    width: '100%',
    margin: theme.spacing(0, 'auto'),
    textAlign: 'center',
    display: 'grid',
    placeItems: 'center',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    [theme.breakpoints.down('xs')]: {
      top: '5.9vh',
      display: 'block',
    },
  },
}));

const IconAlert = () => {
  const classes = useStyles();
  const { alert, setAlert } = useStoreContext();

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
