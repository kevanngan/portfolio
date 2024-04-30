import React from 'react';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  
  const restBase = 'https://kevanngan.com/portfolio/wp-json/wp/v2/';

  return (
    <div>
      <header className="site-header">
        <nav className="site-navigation">
          <ul>
            {/* <li><NavLink to="/" exact>Home</NavLink></li> */}
            <li><ScrollLink to="projects" smooth={true} duration={500}>Projects</ScrollLink></li>
            <li><ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink></li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <Router>
          <Routes>
            <Route path="/portfolio/" element={<Home restBase={restBase} />} />
            <Route path="/about" element={<About restBase={restBase} />} />
            <Route path="/projects" element={<Projects restBase={restBase} />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;