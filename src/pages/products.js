import React from 'react';
import { ProductCard } from '../components/cards/product';
import { AddToCartButton } from '../components/buttons/add-to-cart';
import { useFetchProducts } from '../hooks/use-fetch-products';
import { useCart } from '../contexts/cart-provider';

const Products = () => {
  const { handleAddToCart } = useCart();
  const { products } = useFetchProducts();

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div
          className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
          data-testid="products-list">
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
              <div className="mt-6">
                <AddToCartButton
                  name="Add to Cart"
                  handleOnClick={handleAddToCart}
                  product={product}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
