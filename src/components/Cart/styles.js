import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#f2f3f3',
    minHeight: '93vh',
  },
  titleContainer: {
    backgroundColor: 'white',
    borderRadius: '0.25em',
    margin: theme.spacing(1, 0, 1.2),
    boxShadow: theme.shadows[1],
  },
  title: {
    margin: theme.spacing(1, 0),
    fontSize: '2rem',
    [theme.breakpoints.only('xs')]: {
      textAlign: 'center',
      fontSize: '1.65rem',
    },
  },
  itemAmount: {
    color: theme.palette.primary.dark,
    fontSize: '1.5rem',
    [theme.breakpoints.only('xs')]: {
      fontSize: '1.2rem',
    },
  },
}));
