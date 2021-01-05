import {
  AppBar,
  Badge,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  FormatListBulleted,
  Home,
  Menu as MenuIcon,
  Shop,
  ShoppingCart,
} from '@material-ui/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStoreContext } from '../context/StoreContext';

const drawerWidth = 0;

const useStyles = makeStyles((theme) => ({
  appBar: {
    /* maxHeight: '15vh', */
    boxShadow: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  root: {
    flexGrow: 1,
  },
  tabs: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  menuButton: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
  },
  /*  tab: {
    border: 'none',
    background: 'red',
    margin: theme.spacing(0),
    padding: theme.spacing(0),
    width: '10%',
  }, */
  title: {
    flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
  },
  /* image: {
    marginRight: '10px',
  }, */

  grow: {
    flexGrow: 1,
  },
}));

//LinkList navbar

const Navbar = () => {
  const { amount } = useStoreContext();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();

  const handleClick = (event) => setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  const handleChange = (event, newValue) => setValue(newValue);

  return (
    <AppBar position="sticky" className={classes.appBar} color="inherit">
      <Toolbar>
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
        <Typography
          component={Link}
          to="/"
          variant="h5"
          className={classes.title}
          color="inherit"
          title="To E-Shop homepage"
        >
          <Shop color="primary" />
          E-Shop
        </Typography>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          component="nav"
          className={classes.tabs}
          centered
        >
          <Tab className={classes.tab} component={Link} to="/" label="Home" />
          <Tab className={classes.tab} label="Products" />
          <Tab className={classes.tab} label="About Us" />
        </Tabs>
        <div className={classes.root}></div>
        <List
          component="nav"
          aria-label="main mailbox folders"
          className={classes.flexContainer}
        >
          <ListItem button component={Link} to="/" dense>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <FormatListBulleted />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItem>
        </List>
        <div className={classes.grow} />
        <div className={classes.button}>
          <IconButton
            component={Link}
            to="/checkout"
            aria-label="Show cart items"
            color="inherit"
          >
            <Badge badgeContent={amount} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
