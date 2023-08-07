import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import OurTeam from './pages/OurTeam';
import ContactUs from './pages/ContactUs';
import Submitted from './components/Submitted';
import './styles/_global.scss'

function App() {
  const [isTrayOpen, setTrayOpen] = useState(false);

  function toggleTray() {
    setTrayOpen(!isTrayOpen);
  };

  return (
    <Routes>
      <Route path="/" element={<Home isTrayOpen={isTrayOpen} toggleTray={toggleTray} />} />
      <Route path="/about" element={<OurTeam isTrayOpen={isTrayOpen} toggleTray={toggleTray} />} />
      <Route path="/contact" element={<ContactUs isTrayOpen={isTrayOpen} toggleTray={toggleTray} />} />
      <Route path="/submission-confirmed" element={<Submitted />} />
    </Routes>
  );
}

export default App;
