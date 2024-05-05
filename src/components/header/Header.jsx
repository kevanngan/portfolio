import React, { useState, useEffect } from 'react';
import HamburgerMenu from '../HamburgerMenu';
import Nav from '../Nav';
import { tabletWidth } from '../../globals/globalVariables';

function Header() {

  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(prevState => !prevState);
  };

  const handleMediaQueryChange = (e) => {
    if (!e.matches) {  // When the viewport is below tablet width
      setShowNav(false);  // Ensures that the menu is closed when resizing to mobile view
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${tabletWidth}px)`);
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <header className={`header ${showNav ? 'show' : ''}`}>
        <img src="assets/icons/react.png" alt="React Logo" />
        <HamburgerMenu showNav={showNav} toggleNav={toggleNav} />
        <Nav toggleNav={toggleNav} />
    </header>
  );
}

export default Header;