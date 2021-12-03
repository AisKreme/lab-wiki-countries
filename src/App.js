import './App.css';
import { Routes, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
function App() {
  return (
    <div style={{ display: 'flex' }}>
      <CountriesList />
      <Routes>
        <Route path="/country/:id" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
