function fetchGet(url, abortController) {
  const promise = fetch(url, {
    signal: abortController.signal,
  }).then((res) => res.json());
  return promise;
}

const http = {
  get: fetchGet,
};

export default http;
