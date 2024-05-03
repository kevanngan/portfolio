import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

function Header() {

  return (
    <header>
        <nav>
            <ul>
                <li><Link to="/portfolio/">Home</Link></li>
                <li><ScrollLink to="about-section" smooth={true} duration={500}>About</ScrollLink></li>
                <li><ScrollLink to="projects-section" smooth={true} duration={500}>Projects</ScrollLink></li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;