import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    height: 276,
    backgroundSize: 'contain',
    cursor: 'pointer',
  },
  title: {
    padding: theme.spacing(1.5, 1),
    background: '#f7f8ff',
    minHeight: '6.25em',
    display: 'grid',
    placeItems: 'center',
  },
  priceContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#3f51b5',
    color: '#fafafa',
    padding: theme.spacing(0.7, 1),
  },
  priceNumber: {
    border: `2px outset ${theme.palette.info.dark}`,
    padding: '0.3em 0.5em',
    borderRadius: '0.15em',
    [theme.breakpoints.down('sm')]: {
      padding: '0.3em',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0.3em 0.5em',
    },
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#f7f7f7',
  },
  btnDel: {
    background: theme.palette.secondary.main,
    color: '#fafafa',
    '&:hover': {
      background: theme.palette.secondary.dark,
    },
  },
  btnAdd: {
    background: theme.palette.primary.main,
    color: '#fafafa',
    '&:hover': {
      background: theme.palette.primary.dark,
    },
  },
  rightBtns: {
    display: 'flex',
    // justifyContent: 'space-between',
    alignItems: 'center',
    gap: theme.spacing(1.4),
    [theme.breakpoints.down('sm')]: {
      gap: theme.spacing(1),
    },
  },
  btnRoot: {
    minWidth: 0,
  },
}));
