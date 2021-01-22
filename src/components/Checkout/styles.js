import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  successContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: theme.spacing(2.5),
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: theme.spacing(1, 'auto'),
    padding: theme.spacing(1, 0),
    maxWidth: 700,
  },
  forms: {
    margin: theme.spacing(0, 'auto'),
    maxWidth: 700,
  },
  instructions: {
    margin: theme.spacing(1, 0),
  },
  whiteBg: {
    background: 'white',
  },
}));
