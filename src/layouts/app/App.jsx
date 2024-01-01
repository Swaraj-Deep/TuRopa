// Components
{
  /* <ClothesGrid />; */
}
import { Route, Routes } from 'react-router-dom';
import Search from '@pages/search';
function App() {
  // Need routing here
  return (
    <div>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
    </div>
  );
}

export default App;
