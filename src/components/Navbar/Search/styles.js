import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  search: {
    width: '350px',
    margin: theme.spacing(0, 1.75),
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
  },
  indicator: {
    color: theme.palette.secondary.main,
  },
}));
