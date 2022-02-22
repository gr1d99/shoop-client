import * as React from 'react';
import CartProvider from './contexts/cart-provider';

import Routes from './routes/routes';
import AppLayout from './layout/app';
import Navbar from './components/navbar';

const App = () => (
  <AppLayout>
    <CartProvider>
      <Navbar />
      <Routes />
    </CartProvider>
  </AppLayout>
);

export default App;
