import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  btnContainer: {
    margin: theme.spacing(1, 0, 2),
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(1.5, 2),
    marginTop: theme.spacing(1),
  },
}));
