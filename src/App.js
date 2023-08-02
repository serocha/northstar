import { useState } from 'react';

import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';

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
    </div>
  );
}

export default App;
