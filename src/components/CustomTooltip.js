import { Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
    fontSize: '0.95rem',
  },
}));

const CustomTooltip = (props) => {
  const classes = useStyles();

  return <Tooltip arrow classes={classes} {...props} />;
};

export default CustomTooltip;
