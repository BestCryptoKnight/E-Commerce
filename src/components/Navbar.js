import {
  AppBar,
  Badge,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Menu as MenuIcon, Shop, ShoppingCart } from '@material-ui/icons';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import CustomTooltip from './CustomTooltip';
import NavList from './NavList';

const drawerWidth = 0;

const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    [theme.breakpoints.up('xl')]: {
      justifyContent: 'space-around',
    },
  },
  menuButton: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },

  title: {
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
  },
}));

const Navbar = () => {
  const { amount } = useCartContext();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();

  const handleClick = (event) => setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  const handleChange = (event, newValue) => setValue(newValue);

  return (
    <AppBar position="sticky" className={classes.appBar} color="inherit">
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          className={classes.menuButton}
          onClick={handleClick}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem component={Link} to="/" onClick={handleClose}>
            Home
          </MenuItem>
          <MenuItem onClick={handleClose}>Products</MenuItem>
          <MenuItem onClick={handleClose}>About</MenuItem>
        </Menu>
        <CustomTooltip title="To homepage">
          <Typography
            component={Link}
            to="/"
            variant="h5"
            className={classes.title}
            color="inherit"
          >
            <Shop color="primary" />
            E-Shop
          </Typography>
        </CustomTooltip>
        <NavList />
        <div className={classes.button}>
          <CustomTooltip title="Show cart items">
            <IconButton
              component={NavLink}
              to="/cart"
              aria-label="Show cart items"
              color="inherit"
              activeStyle={{
                background: 'rgba(227, 212, 152, 0.5)',
              }}
            >
              <Badge badgeContent={amount} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </CustomTooltip>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
