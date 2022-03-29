import Navbar from '../components/navbar';
import * as React from 'react';
import CartProvider from '../contexts/cart-provider';

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <CartProvider>
      <Navbar />
      {children}
    </CartProvider>
  );
};

export default ClientLayout;
