import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Nav = ({ toggleNav, scrollToTop }) => {
    const location = useLocation();

    useEffect(() => {
        // Check if the new location has a hash and if the pathname matches the main page
        if (location.hash && location.pathname === "/portfolio/") {
            const id = location.hash.replace('#', '');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    window.scrollTo({
                        top: element.offsetTop - 200,  // Adjust the offset for any fixed header or similar UI element
                        behavior: 'smooth'
                    });
                }
            }, 100);  // Delay the scroll a bit to ensure elements are rendered
        }
    }, [location]);  // Run this effect whenever the location changes

    const handleNavClick = (hash) => {
        if (location.pathname === "/portfolio/" && location.hash !== hash) {
            location.hash = hash;  // This only changes the hash, does not cause re-navigation
        }
    };

    return (
        <nav className='header-navigation' onClick={toggleNav}>
            <ul>
                <li><Link to="/portfolio/" onClick={scrollToTop}>Home</Link></li>
                <li><Link to="/portfolio/#about-section" onClick={() => handleNavClick('#about-section')}>About</Link></li>
                <li><Link to="/portfolio/#projects-section" onClick={() => handleNavClick('#projects-section')}>Projects</Link></li>
                <li><ScrollLink to="contact-section" smooth={true} duration={500}>Contact</ScrollLink></li>
            </ul>
        </nav>
    );
}

export default Nav;