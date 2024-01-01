// Utils
import http from '@utils/http';

const handleError = (abortController, onError) => (err) => {
  onError({ err, abortController });
};

const handleSetteled = (abortController, onSetteled) => () => {
  onSetteled({ abortController });
};

function fetchData({ url, onSuccess, onError, onSetteled }) {
  const abortController = new AbortController();
  const promise = http.get(url, abortController);
  promise
    .then(onSuccess)
    .catch(handleError(abortController, onError))
    .finally(handleSetteled(abortController, onSetteled));

  return () => abortController.abort();
}

export default fetchData;
