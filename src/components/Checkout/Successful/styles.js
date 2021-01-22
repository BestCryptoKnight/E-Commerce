import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
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
