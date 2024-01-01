import { useMemo } from 'react';

// Constants
import { EMPTY_ARRAY } from '@constants/defaults';

// Hooks
import useData from '@hooks/useData';

function useProducts() {
  const searchUrl = 'https://dummyjson.com/products/category/mens-shirts';

  const { data, isLoading, error } = useData({
    url: searchUrl,
    initialValue: EMPTY_ARRAY,
  });

  const { products = EMPTY_ARRAY } = data;

  const values = useMemo(
    () => ({
      clothes: products,
      isLoading,
      error,
    }),
    [products, isLoading, error]
  );

  return values;
}

export default useProducts;
