import { useState, useEffect, useMemo } from 'react';

// Constants
import { EMPTY_OBJECT, ERROR_OCCURRED } from '@constants/defaults';

// Services
import fetchData from '@services/fetchData';

const handleSuccess = (setData) => (response) => {
  setData(response);
};

const handleError =
  (setError) =>
  ({ err, abortController }) => {
    if (!abortController.signal.aborted) {
      setError(err?.message || ERROR_OCCURRED);
    }
  };

const handleSetteled =
  (setIsLoading) =>
  ({ abortController }) => {
    if (abortController.signal.aborted) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  };

function useData({ url, initialValue = EMPTY_OBJECT, shouldCallApi = true }) {
  const [data, setData] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    if (shouldCallApi) {
      setIsLoading(true);
      return fetchData({
        url,
        onSuccess: handleSuccess(setData),
        onError: handleError(setError),
        onSetteled: handleSetteled(setIsLoading),
      });
    }
  }, [url, shouldCallApi]);

  const values = useMemo(
    () => ({
      data,
      isLoading,
      error,
    }),
    [data, isLoading, error]
  );
  return values;
}

export default useData;
