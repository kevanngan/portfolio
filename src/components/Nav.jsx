import React from 'react';
import { Link} from 'react-router-dom';
import { tabletWidth } from '../globals/globalVariables';
import { Link as ScrollLink } from 'react-scroll';


const Nav = ({ toggleNav }) => {

    const closeNav = (e) => {
        if (window.innerWidth < tabletWidth) {
            toggleNav();
        } else {
            e.target.blur();
        }
    }

    return (
        <nav className='header-navigation' onClick={closeNav}>
            <ul>
                <li><Link to="/portfolio/">Home</Link></li>
                <li><ScrollLink to="about-section" smooth={true} duration={500}>About</ScrollLink></li>
                <li><ScrollLink to="projects-section" smooth={true} duration={500}>Projects</ScrollLink></li>
                <li><ScrollLink to="site-footer" smooth={true} duration={500}>Contact</ScrollLink></li>
            </ul>
        </nav>
    )
}

export default Nav;