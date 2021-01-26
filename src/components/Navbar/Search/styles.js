import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  search: {
    width: '350px',
    margin: theme.spacing(0, 1.75),
    borderRadius: theme.shape.borderRadius,
    // position: 'relative',
    // backgroundColor: fade(theme.palette.primary.light, 0.1),
    // '&:hover': {
    //   backgroundColor: fade(theme.palette.primary.main, 0.1),
    // },
    // [theme.breakpoints.up('sm')]: {
    //   marginLeft: theme.spacing(3),
    //   width: 'auto',
    // },
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
  },
  // searchIcon: {
  //   padding: theme.spacing(0, 1),
  //   height: '100%',
  //   position: 'absolute',
  //   pointerEvents: 'none',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   color: theme.palette.primary.dark,
  // },
  // input: {
  //   paddingLeft: '30px',
  // },
  // input2: {
  //   paddingLeft: theme.spacing(3),
  // },
  // inputRoot: {
  //   color: 'inherit',
  //   color: theme.palette.grey[50],
  //   fontWeight: 'bold',
  // },
  // inputInput: {
  //   padding: theme.spacing(1, 1, 1, 0),
  //   paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
  //   transition: theme.transitions.create('width'),
  //   width: '100%',
  //   [theme.breakpoints.up('md')]: {
  //     width: '20ch',
  //   },
  // },
}));
