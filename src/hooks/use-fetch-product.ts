import * as React from 'react';
import API from '../api';
import { IProduct } from '../interfaces';

export const useFetchProduct = (id: number | string) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [product, setProduct] = React.useState<IProduct | null>(null);

  React.useEffect(() => {
    let isMounted = true;

    if (isMounted && id) {
      setLoading(true);

      API.products
        .get(id)
        .then(({ data }) => {
          setProduct(data.data);
        })
        .catch((error): void => {})
        .finally(() => {
          setLoading(false);
        });
    }

    return () => {
      isMounted = false;
      setProduct(null);
    };
  }, [id]);

  return { product, loading };
};
