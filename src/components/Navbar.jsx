import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#projects', label: 'Projects' },
        { href: '#skills', label: 'Skills' },
        { href: '#contact', label: 'Contact' }
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <a href="#home" className="logo gradient-text">
                    KG
                </a>

                <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="nav-link"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="nav-actions">
                    <button
                        className="menu-toggle"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
