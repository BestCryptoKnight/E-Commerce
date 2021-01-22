import { fade, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  activeChip: {
    background: `${fade(theme.palette.primary.main, 0.85)} !important`,
    margin: theme.spacing(0.5),
    fontSize: '0.925rem',
    color: theme.palette.grey['50'],
  },
  chip: {
    margin: theme.spacing(0.5),
    fontSize: '0.925rem',
  },
}));
