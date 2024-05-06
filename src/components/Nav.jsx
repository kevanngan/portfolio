import React from 'react';
import { Link} from 'react-router-dom';
import { tabletWidth } from '../globals/globalVariables';
import { Link as ScrollLink } from 'react-scroll';


const Nav = ({ toggleNav, scrollToTop }) => {

    const closeNav = (e) => {
        if (window.innerWidth < tabletWidth) {
            toggleNav();
        } else {
            e.target.blur();
        }
    }

    const headerHeight = 200;

    return (
        <nav className='header-navigation' onClick={closeNav}>
            <ul>
                <li><Link to="/portfolio/" onClick={scrollToTop}>Home</Link></li>
                <li><ScrollLink to="about-section" smooth={true} duration={500} offset={-headerHeight}>About</ScrollLink></li>
                <li><ScrollLink to="projects-section" smooth={true} duration={500} offset={-headerHeight}>Projects</ScrollLink></li>
                <li><ScrollLink to="site-footer" smooth={true} duration={500}>Contact</ScrollLink></li>
            </ul>
        </nav>
    )
}

export default Nav;