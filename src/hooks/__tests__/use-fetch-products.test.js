import { renderHook } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';

import { useFetchProducts } from '../use-fetch-products';
import { endpoints, instance } from '../../api';

describe('useFetchProducts()', () => {
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

  it('sets loading flag correctly', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchProducts());

    expect(result.current.loading).toBeTruthy();

    await waitForNextUpdate();

    expect(result.current.loading).toBeFalsy();
  });

  it('returns products', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchProducts());

    await waitForNextUpdate();

    expect(result.current.products).toHaveLength(1);
  });
});
