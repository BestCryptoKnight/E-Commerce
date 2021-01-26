import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  cardDetails: {
    width: '100%',
    margin: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      width: '66%',
    },
  },
  btnContainer: {
    margin: theme.spacing(2, 0, 5.6),
  },
  total: {
    background: '#3f51b5',
    color: '#fafafa',
    padding: '0.3em 0.5em',
    fontSize: '1.6rem',
  },
}));
