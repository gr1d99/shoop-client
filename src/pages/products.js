import React from 'react';
import { ProductCard } from '../components/cards/product';
import { AddToCartButton } from '../components/buttons/add-to-cart';
import API from '../api';

const Products = () => {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    let isMounted = true;

    API.products
      .all()
      .then(({ data }) => {
        if (isMounted) {
          setProducts(data);
        }
      })
      .catch((error) => {
        console.log({ error });
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
              <div className="mt-6">
                <AddToCartButton name={product.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
