import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 366,
    cursor: 'pointer',
    backgroundSize: 'contain',
  },
  cardContent: {
    paddingBottom: 0,
  },
  description: {
    marginTop: '0.5em',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  accordion: {
    padding: theme.spacing(1, 2),
  },
}));
