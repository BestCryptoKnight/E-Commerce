import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    display: 'grid',
    placeItems: 'center',
    margin: theme.spacing(12),
    padding: theme.spacing(3),
    whiteSpace: 'nowrap',
    height: 150,
  },
}));
