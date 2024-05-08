import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Nav = ({ toggleNav, scrollToTop }) => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash && location.pathname === "/") {
            const id = location.hash.replace('#', '');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    window.scrollTo({
                        top: element.offsetTop - 200,
                        behavior: 'smooth'
                    });
                }
            }, 100);
        }
    }, [location]);

    const handleNavClick = (hash) => {
        if (location.pathname === "/" && location.hash !== hash) {
            location.hash = hash;
        }
    };

    return (
        <nav className='header-navigation' onClick={toggleNav}>
            <ul>
                <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
                <li><Link to="/#about-section" onClick={() => handleNavClick('#about-section')}>About</Link></li>
                <li><Link to="/#projects-section" onClick={() => handleNavClick('#projects-section')}>Projects</Link></li>
                <li><ScrollLink to="site-footer" smooth={true} duration={500}>Contact</ScrollLink></li>
            </ul>
        </nav>
    );
}

export default Nav;