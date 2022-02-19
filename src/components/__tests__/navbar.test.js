import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import CartProvider from '../../contexts/cart-provider';
import Navbar from '../navbar';

describe(`<Navbar />`, () => {
  it('renders correct cart items count', () => {
    render(
      <MemoryRouter>
        <CartProvider>
          <Navbar />
        </CartProvider>
      </MemoryRouter>
    );

    const cartEl = screen.getByTestId('cart-items-count');

    expect(cartEl).toHaveTextContent('0');
  });
});
