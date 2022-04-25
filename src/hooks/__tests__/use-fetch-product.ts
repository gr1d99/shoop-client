import { renderHook } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';

import { useFetchProduct } from '../use-fetch-product';
import { endpoints, instance } from '../../api';

describe('useFetchProduct()', () => {
  const mock = new MockAdapter(instance);

  beforeEach(() => {
    mock.onGet(`${endpoints.products}/1/`).reply(200, {
      data: {
        id: 41,
        attributes: {
          slug: 'odit',
          name: 'odit',
          images: 'https://placehold.it/300x300.png',
          price: '998.0',
          description: 'Iusto ea et et.',
          brand_id: 11
        }
      }
    });
  });

  afterEach(() => {
    mock.reset();
  });

  it('sets loading flag correctly', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchProduct(1));

    expect(result.current.loading).toBeTruthy();

    await waitForNextUpdate();

    expect(result.current.loading).toBeFalsy();
  });

  it('returns product', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchProduct(1));

    await waitForNextUpdate();

    expect(result.current.product).toHaveProperty('id', 1);
    expect(result.current.product).toHaveProperty('attributes', {
      slug: 'odit',
      name: 'odit',
      images: 'https://placehold.it/300x300.png',
      price: '998.0',
      description: 'Iusto ea et et.',
      brand_id: 11
    });
  });
});
