import { act, renderHook } from '@testing-library/react-hooks';
import useCart from '../use-cart';

const product = {
  id: 41,
  slug: 'odit',
  name: 'odit',
  images: 'https://placehold.it/300x300.png',
  price: '998.0',
  description: 'Iusto ea et et.',
  brand_id: 11
};

describe('useCart()', () => {
  it('adds items to cart', () => {
    const { result } = renderHook(() => useCart());

    act(() => {
      result.current.handleAddToCart(product);
    });

    expect(result.current.cartItems.count).toEqual(1);
  });
});
