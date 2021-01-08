import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FormatListBulleted, Home, Info } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';

const linkBorder = '3px solid #e3d498';
const boxShadow =
  '0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1, 2),
    // margin: theme.spacing(0, 1),
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    textTransform: 'capitalize',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}));

const NavList = () => {
  const classes = useStyles();

  return (
    <List
      component="nav"
      aria-label="home products about us"
      className={classes.listContainer}
    >
      <ListItem
        button
        component={NavLink}
        exact
        to="/"
        activeStyle={{
          borderBottom: linkBorder,
          boxShadow,
        }}
        className={classes.root}
      >
        <ListItemIcon>
          <Home />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem
        button
        component={NavLink}
        exact
        to="/products"
        activeStyle={{
          borderBottom: linkBorder,
          boxShadow,
        }}
      >
        <ListItemIcon>
          <FormatListBulleted />
        </ListItemIcon>
        <ListItemText primary="Products" />
      </ListItem>
      <ListItem
        button
        component={NavLink}
        exact
        to="/about"
        activeStyle={{
          borderBottom: linkBorder,
          boxShadow,
        }}
      >
        <ListItemIcon>
          <Info />
        </ListItemIcon>
        <ListItemText primary="About us" />
      </ListItem>
    </List>
  );
};

export default NavList;
