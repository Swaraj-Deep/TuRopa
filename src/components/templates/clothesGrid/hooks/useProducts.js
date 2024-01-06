import { useState, useEffect, useMemo } from 'react';

// Constants
import { EMPTY_ARRAY } from '@constants/defaults';

// Utils
import http from '@utils/http';

const onSuccess =
  (setClothes) =>
  ({ products }) => {
    setClothes(products);
  };

const onError = (abortController) => (err) => {
  if (!abortController.signal.aborted) {
    console.error(err);
  }
};

const onSetteled = (setIsLoading, abortController) => () => {
  if (abortController.signal.aborted) {
    setIsLoading(true);
  } else {
    setIsLoading(false);
  }
};

function fetchClothes(setClothes, setIsLoading) {
  setIsLoading(true);
  const abortController = new AbortController();
  const promise = http.get(
    'https://dummyjson.com/products/category/mens-shirts',
    abortController
  );
  promise
    .then(onSuccess(setClothes))
    .catch(onError(abortController))
    .finally(onSetteled(setIsLoading, abortController));

  return () => abortController.abort();
}

function useProducts() {
  const [clothes, setClothes] = useState(EMPTY_ARRAY);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => fetchClothes(setClothes, setIsLoading), []);

  const values = useMemo(
    () => ({
      clothes,
      isLoading,
    }),
    [clothes, isLoading]
  );
  return values;
}

export default useProducts;
