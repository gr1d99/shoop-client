import MockAdapter from 'axios-mock-adapter';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Products from '../products';

import { endpoints, instance } from '../../api';

describe('<Products />', () => {
  describe('<AddToCartButton />', () => {
    const mock = new MockAdapter(instance);

    beforeEach(() => {
      mock.onGet(endpoints.products).reply(200, [
        {
          id: 41,
          slug: 'odit',
          name: 'odit',
          images: 'https://placehold.it/300x300.png',
          price: '998.0',
          description: 'Iusto ea et et.',
          brand_id: 11
        }
      ]);
    });

    afterEach(() => {
      mock.reset();
    });

    it('renders products list', async () => {
      const { findByTestId } = render(<Products />);

      const node = await waitFor(() => findByTestId('products-list'));

      expect(node).toBeInTheDocument();
      expect(node.children).toHaveLength(1);
    });
  });
});
