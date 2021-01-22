import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    // display: 'grid',
    // placeItems: 'center',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#f2f3f3',
    minHeight: '93vh',
  },
  titleContainer: {
    backgroundColor: 'white',
    borderRadius: '0.25em',
    margin: theme.spacing(1, 0),
    boxShadow: theme.shadows[1],
  },
  title: {
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    margin: theme.spacing(1, 0),
    textAlign: 'right',
    [theme.breakpoints.only('xs')]: {
      textAlign: 'center',
      fontSize: '1.65rem',
    },
  },
  backContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  itemAmount: {
    color: theme.palette.primary.dark,
    fontSize: '1.3rem',
    // margin: theme.spacing(0, 0, 1, 0),
    [theme.breakpoints.only('xs')]: {
      // textAlign: 'center',
      fontSize: '1.2rem',
    },
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  cardDetails: {
    width: '100%',
    margin: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      width: '66%',
    },
  },
  btnContainer: {
    margin: theme.spacing(2, 0),
  },
  total: {
    background: '#3f51b5',
    color: '#fafafa',
    padding: '0.3em 0.5em',
    fontSize: '1.6rem',
    /*  border: `4px double ${theme.palette.info.dark}`,
        borderRadius: '0.15em', */
    /* padding: theme.spacing(1), */
  },
  paper: {
    display: 'grid',
    placeItems: 'center',
    margin: theme.spacing(12),
    padding: theme.spacing(3),
    whiteSpace: 'nowrap',
    height: 150,
  },
}));
