import { createRoot } from 'react-dom/client';

import App from '@layouts/app';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('appContainer'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
