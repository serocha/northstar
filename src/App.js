import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { navRoutes, footerRoutes } from './utils/routes';
import Home from './pages/Home';
import OurTeam from './pages/OurTeam';
import ContactUs from './pages/ContactUs';
import Submitted from './components/Submitted';
import './styles/partial/_global.scss';

function App() {
  const [isTrayOpen, setTrayOpen] = useState(false);

  function toggleTray() {
    setTrayOpen(!isTrayOpen);
  };

  return (
    <Routes>
      <Route path="/" element={
        <Home 
          isTrayOpen={isTrayOpen}
          toggleTray={toggleTray}
          navRoutes={navRoutes.filter(obj => {
            return obj.to !== '/';
          })}
          footerRoutes={footerRoutes.filter(obj => {
            return obj.to !== '/';
          })} />
      } />
      <Route path="/about" element={
        <OurTeam 
          isTrayOpen={isTrayOpen}
          toggleTray={toggleTray}
          navRoutes={navRoutes.filter(obj => {
            return obj.to !== '/about';
          })}
          footerRoutes={footerRoutes.filter(obj => {
            return obj.to !== '/about';
          })} />
      } />
      <Route path="/contact" element={
        <ContactUs
          isTrayOpen={isTrayOpen}
          toggleTray={toggleTray}
          navRoutes={navRoutes.filter(obj => {
            return obj.to !== '/contact';
          })}
          footerRoutes={footerRoutes.filter(obj => {
            return obj.to !== '/contact';
          })} />
      } />
      <Route path="/submission-confirmed" element={<Submitted />} />
    </Routes>
  );
}

export default App;
