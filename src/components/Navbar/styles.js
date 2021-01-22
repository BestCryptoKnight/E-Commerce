import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    boxShadow: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.15)',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    [theme.breakpoints.up('xl')]: {
      justifyContent: 'space-around',
    },
  },
  title: {
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
    [theme.breakpoints.only('xs')]: {
      fontSize: '1.4rem',
    },
  },
}));
