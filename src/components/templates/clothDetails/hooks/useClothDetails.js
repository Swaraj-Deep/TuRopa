import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

// Constants
import { EMPTY_OBJECT } from '@constants/defaults';

// Utils
import _isEmpty from '@utils/isEmpty';

// Hooks
import useData from '@hooks/useData';

function useClothDetails(cloth) {
  const { id } = useParams();
  const detailsUrl = `https://dummyjson.com/products/${id}`;

  const [shouldCallApi, setShouldCallApi] = useState(false);

  useEffect(() => {
    if (_isEmpty(cloth)) {
      setShouldCallApi(true);
    }
    return () => setShouldCallApi(false);
  }, [cloth]);

  const { data, isLoading, error } = useData({
    url: detailsUrl,
    initialValue: cloth,
    shouldCallApi: shouldCallApi,
  });

  const values = useMemo(
    () => ({
      clothDetails: data,
      isLoading,
      error,
    }),
    [data, isLoading, error]
  );

  return values;
}

export default useClothDetails;
