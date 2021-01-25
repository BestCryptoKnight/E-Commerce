import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    // backgroundColor: fade(theme.palette.primary.main, 0.15),
    // '&:hover': {
    //   backgroundColor: fade(theme.palette.primary.main, 0.22),
    // },
    margin: theme.spacing(0, 1.75),
    width: '300px',
    // [theme.breakpoints.up('sm')]: {
    //   marginLeft: theme.spacing(3),
    //   width: 'auto',
    // },
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.primary.dark,
  },
  input: {
    paddingLeft: '30px',
  },
  input2: {
    // paddingLeft: theme.spacing(3),
  },
  inputRoot: {
    color: 'inherit',
    // color: theme.palette.grey[50],
    // fontWeight: 'bold',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
