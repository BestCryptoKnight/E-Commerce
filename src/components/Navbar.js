import {
  AppBar,
  Badge,
  IconButton,
  Paper,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ShoppingCart } from '@material-ui/icons';
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
  title: {
    flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
  },
  /* image: {
    marginRight: '10px',
  }, */
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  grow: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const { cart, amount } = useStoreContext();
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="fixed" className={classes.appBar} color="inherit">
      <Toolbar>
        <Typography
          component={Link}
          to="/"
          variant="h4"
          className={classes.title}
          color="inherit"
        >
          {/*           <img
            src={}
            alt="commerce.js"
            height="25px"
            className={classes.image}
          /> */}
          E-Commerce
        </Typography>
        <Paper className={classes.root}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab component={Link} to="/" label="Home" />
            <Tab label="Products" />
            <Tab label="About Us" />
          </Tabs>
        </Paper>
        <div className={classes.grow} />
        <div className={classes.button}>
          <IconButton
            component={Link}
            to="/checkout"
            aria-label="Show cart items"
            color="inherit"
          >
            <Badge badgeContent={cart.length} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
