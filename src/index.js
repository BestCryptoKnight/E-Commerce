import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartProvider } from './context/CartContext';
import { ProductsProvider } from './context/ProductsContext';
import './styles/main.scss';

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
