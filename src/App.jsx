import "./App.css";
import { Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";

function App() {
  return (
    <>
        <Navbar />
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/:countryId" element={<CountryDetails/>} />
    </Routes>
    </>
  );
}

export default App;
