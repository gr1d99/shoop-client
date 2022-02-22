import { act, renderHook } from '@testing-library/react-hooks';
import CartProvider, { useCart } from '../cart-provider';

const product = {
  id: 41,
  slug: 'odit',
  name: 'odit',
  images: 'https://placehold.it/300x300.png',
  price: '998.0',
  description: 'Iusto ea et et.',
  brand_id: 11
};

describe(`<CartProvider />`, () => {
  describe(`handleAddToCart()`, () => {
    it('adds product to cart', () => {
      const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>;
      const { result } = renderHook(() => useCart(), { wrapper });

      act(() => {
        result.current.handleAddToCart(product);
      });

      expect(result.current.cartItems.count).toEqual(1);
    });
  });
});
