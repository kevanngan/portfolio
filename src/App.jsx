import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './scss/styles.scss';

function App() {
  
  const restBase = 'https://kevanngan.com/portfolio/wp-json/wp/v2/';

  return (
    <Router>
     <Routes>
        <Route path="/portfolio/" element={<Home restBase={restBase} />} />
      </Routes>
    </Router>
  );
}

export default App;