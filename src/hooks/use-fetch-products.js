import React from 'react';
import API from '../api';

export const useFetchProducts = () => {
  const [loading, setLoading] = React.useState(false);
  const [products, setProducts] = React.useState([]);

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
