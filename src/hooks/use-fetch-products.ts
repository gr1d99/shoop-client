import * as React from 'react';
import API from '../api';
import { IProduct } from '../interfaces';

export const useFetchProducts = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [products, setProducts] = React.useState<IProduct[]>([]);

  React.useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      setLoading(true);

      API.products
        .all()
        .then(({ data }) => {
          setProducts(data.data);
        })
        .catch((error) => {})
        .finally(() => {
          setLoading(false);
        });
    }

    return () => {
      isMounted = false;
    };
  }, []);

  return { products, loading };
};
