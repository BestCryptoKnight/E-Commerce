import {
  ThemeProvider,
  unstable_createMuiStrictModeTheme as createMuiTheme,
} from '@material-ui/core/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartProvider } from './context/CartContext';
import { ProductsProvider } from './context/ProductsContext';
import './styles/main.scss';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <ProductsProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </ProductsProvider>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
