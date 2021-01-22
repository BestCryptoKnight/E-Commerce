import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
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
