import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(0.25, 4, 2),
    marginTop: theme.spacing(1.5),
  },
  title: {
    margin: theme.spacing(1.25, 0),
  },
  productItem: {
    padding: theme.spacing(0.2, 1),
    flexWrap: 'wrap',
    border: '1px solid #e6e6e6',
    '&:nth-of-type(even)': {
      backgroundColor: 'rgba(0, 0, 0,0.04)',
    },
    '&:not(:last-of-type)': {
      borderBottomWidth: 0,
    },
  },
  total: {
    padding: theme.spacing(0.8),
    border: '3px double #d6d6d6',
  },
}));
