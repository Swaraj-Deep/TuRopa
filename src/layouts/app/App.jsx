import { Route, Routes } from 'react-router-dom';

// Components
import Search from '@pages/search';
import Details from '@pages/details';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
}

export default App;
