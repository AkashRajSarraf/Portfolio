import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header class="header">
            <div class="container">
                <a href="#" class="logo">AR<span class="dot">.</span></a>
                <nav class="nav">
                    <ul class={`nav-list ${isMenuOpen ? 'active' : ''}`}>
                        <li>
                            <Link
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}
                                class="nav-link"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}
                                class="nav-link"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="skills"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}
                                class="nav-link"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}
                                class="nav-link"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}
                                class="nav-link"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div class="hamburger" onClick={toggleMenu}>
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
