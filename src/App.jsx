import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BigBoyBurgers from './pages/BigBoyBurgers';
import Showboat from './pages/Showboat';
import './scss/styles.scss';
import ParticlesComponent from './components/ParticlesBackground';

function App() {
  const restBase = 'https://kevanngan.com/portfolio/wp-json/wp/v2/';

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home restBase={restBase} />} />
        <Route path="/bigboyburgers" element={<BigBoyBurgers restBase={restBase} />} />
        <Route path="/showboat" element={<Showboat restBase={restBase} />} />
      </Routes>
    </Router>
    <ParticlesComponent id='particles'/>
    </>
  );
}

export default App;