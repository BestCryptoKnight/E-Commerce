import { Tooltip } from '@material-ui/core';
import useStyles from './styles';

const CustomTooltip = (props) => {
  const classes = useStyles();

  return <Tooltip arrow classes={classes} {...props} />;
};

export default CustomTooltip;
