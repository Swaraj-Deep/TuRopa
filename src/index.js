import { createRoot } from 'react-dom/client';

import App from '@layouts/app';

const root = createRoot(document.getElementById('appContainer'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
