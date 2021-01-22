import {
  AppBar,
  Badge,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { Shop, ShoppingCart } from '@material-ui/icons';
import { Link, NavLink } from 'react-router-dom';
import { CustomTooltip, Search } from '../../components';
import { useCartContext } from '../../context/CartContext';
import useStyles from './styles';

const Navbar = () => {
  const { amount } = useCartContext();
  const classes = useStyles();

  return (
    <AppBar position="sticky" className={classes.appBar} color="inherit">
      <Toolbar className={classes.toolbar}>
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
        <Search />
        {/* <NavList /> */}
        <div className={classes.button}>
          <CustomTooltip title="Show cart items">
            <IconButton
              component={NavLink}
              to="/cart"
              aria-label="Show cart items"
              color="inherit"
              activeStyle={{
                background: 'rgba(227, 212, 152, 0.6)',
              }}
            >
              <Badge badgeContent={amount} color="secondary" showZero>
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
