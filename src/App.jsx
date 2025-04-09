import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SBDContextProvider } from './context/SideByDarknessContext';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Settings from './components/Settings';
import ItemsWiki from './components/ItemsWiki';
import GameDownload from './components/GameDownload';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <Router>
      <SBDContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/itemswiki" element={<ItemsWiki />} />
          <Route path="/download" element={<GameDownload />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </SBDContextProvider>
    </Router>
  );
}

export default App;