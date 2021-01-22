import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
  },
  slider: {
    marginBottom: theme.spacing(1.25),
    fontSize: '0.925rem',
  },
}));
