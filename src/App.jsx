import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Home from './components/Home';

function App() {
  
  const restBase = 'https://kevanngan.com/portfolio/wp-json/wp/v2/';

  return (
    <div>
      <header className="site-header">
        <nav className="site-navigation">
          <ul>
            <li><ScrollLink to="projects-section" smooth={true} duration={500}>Projects</ScrollLink></li>
            <li><ScrollLink to="about-section" smooth={true} duration={500}>About</ScrollLink></li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <Home restBase={restBase} />
      </main>
    </div>
  );
}

export default App;