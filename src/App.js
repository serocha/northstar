import { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import NavTray from './components/NavTray';

function App() {
  const [isTrayOpen, setTrayOpen] = useState(false);

  function toggleTray() {
    setTrayOpen(!isTrayOpen);
  };

  return (
    <div className="app">
      <Header isTrayOpen={isTrayOpen} toggleTray={toggleTray} />
      <Home isTrayOpen={isTrayOpen} toggleTray={toggleTray} />
      <Footer />
      <NavTray isTrayOpen={isTrayOpen} toggleTray={toggleTray} />
    </div>
  );
}

export default App;
