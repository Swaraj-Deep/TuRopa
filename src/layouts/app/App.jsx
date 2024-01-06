import { Route, Routes } from 'react-router-dom';

// Components
import Search from '@pages/search';
import Clothing from '@pages/clothing';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/clothing/:id" element={<Clothing />} />
    </Routes>
  );
}

export default App;
