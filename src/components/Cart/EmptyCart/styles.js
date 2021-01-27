import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    display: 'grid',
    placeItems: 'center',
    height: 176,
    width: 500,
    // margin: theme.spacing(15),
    padding: theme.spacing(3),
    whiteSpace: 'nowrap',
    [theme.breakpoints.only('xs')]: {
      width: '94vw',
    },
  },
}));
