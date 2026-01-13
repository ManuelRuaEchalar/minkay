import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import MinkayLogo from '../../assets/images/MinkayLogo.png';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { to: 'nosotros', label: 'NOSOTROS' },
    { to: 'objetivos', label: 'OBJETIVOS' },
    { to: 'areas', label: 'ÁREAS' },
    { to: 'donaciones', label: 'DONACIONES' },
    { to: 'contacto', label: 'CONTACTO' },
  ];

  // Cerrar menú al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  // Cerrar menú al hacer clic en un enlace
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Bar - solo visible en escritorio */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="location-info">
            <span className="location-icon">📍</span>
            <span>La Paz 562, Sucre - Chuquisaca, Bolivia</span>
          </div>
          <div className="contact-info">
            <span className="email-icon">📧</span>
            <a href="mailto:contacto@minkay.org">contacto@minkay.org</a>
          </div>
        </div>
      </div>

      {/* Navegación principal */}
      <div className="nav-container">
        {/* Logo */}
        <div className="logo-section">
          <Link to="nosotros" smooth={true} duration={500} className="logo" onClick={handleNavClick}>
            <img 
              src={MinkayLogo} 
              alt="Fundación MINK'AY" 
              className="logo-img"
            />
            <div className="logo-text-container">
              <span className="logo-text">MINK'AY</span>
              <span className="logo-subtitle">DESARROLLO SOSTENIBLE</span>
            </div>
          </Link>
        </div>

        {/* Botón hamburguesa para móvil */}
        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Menú de navegación */}
        <nav>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <li key={item.to} className="nav-item">
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  spy={true}
                  className="nav-link"
                  activeClass="nav-link-active"
                  onClick={handleNavClick}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="nav-item">
              <Link
                to="donaciones"
                smooth={true}
                duration={500}
                offset={-80}
                className="btn btn-donate-header"
                onClick={handleNavClick}
              >
                DONAR
              </Link>
            </li>
          </ul>
        </nav>

        {/* Overlay para móvil */}
        {isMenuOpen && (
          <div 
            className="menu-overlay active" 
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </div>
    </header>
  );
};

export default Header;