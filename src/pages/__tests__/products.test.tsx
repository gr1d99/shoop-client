import { MemoryRouter } from 'react-router-dom';
import MockAdapter from 'axios-mock-adapter';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CartProvider from '../../contexts/cart-provider';

import Navbar from '../../components/navbar';
import Products from '../products';

import { endpoints, instance } from '../../api';

describe('<Products />', () => {
  describe('<AddToCartButton />', () => {
    const mock = new MockAdapter(instance);

    beforeEach(() => {
      mock.onGet(endpoints.products).reply(200, {
        data: [
          {
            id: 1,
            attributes: {
              slug: 'odit',
              name: 'odit',
              images: ['https://placehold.it/300x300.png'],
              price: '998.0',
              description: 'Iusto ea et et.',
              brand_id: 11
            }
          },
          {
            id: 2,
            attributes: {
              slug: 'odit',
              name: 'odit',
              images: ['https://placehold.it/300x300.png'],
              price: '998.0',
              description: 'Iusto ea et et.',
              brand_id: 11
            }
          }
        ]
      });
    });

    afterAll(() => {});

    it('renders products list', async () => {
      const { findByTestId } = render(
        <MemoryRouter>
          <CartProvider>
            <Products />
          </CartProvider>
        </MemoryRouter>
      );

      const node = await findByTestId('products-list');

      expect(node).toBeInTheDocument();
      expect(node.children.length).toEqual(2);
    });

    it('updates cart items count when add to cart button is clicked', async () => {
      const { queryAllByTestId, findByTestId, getByTestId } = render(
        <MemoryRouter>
          <CartProvider>
            <Navbar />
            <Products />
          </CartProvider>
        </MemoryRouter>
      );
      await waitFor(() => findByTestId('products-list'));
      const nodes = queryAllByTestId('add-to-cart-btn');

      userEvent.click(nodes[0]);
      const cartCountEl = getByTestId('cart-items-count');
      expect(cartCountEl).toHaveTextContent('1');
      userEvent.click(nodes[1]);
      expect(cartCountEl).toHaveTextContent('2');
    });
  });
});
