import React from 'react';
import { Link } from 'react-scroll';
import MinkayLogo from '../../assets/images/MinkayLogo.png';
import './Header.css';

const Header = () => {
  const navItems = [
    { to: 'nosotros', label: 'NOSOTROS' },
    { to: 'objetivos', label: 'OBJETIVOS' },
    { to: 'areas', label: 'ÁREAS DE ACCIÓN' },
    { to: 'donaciones', label: 'DONACIONES' },
    { to: 'contacto', label: 'CONTACTO' },
  ];

  return (
    <header className="header">
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="location-info">
            <span className="location-icon">📍</span>
            <span>Chuquisaca, Bolivia</span>
          </div>
          <div className="contact-info">
            <span className="email-icon">📧</span>
            <a href="mailto:contacto@minkay.org">contacto@minkay.org</a>
          </div>
        </div>
      </div>
      
      <div className="nav-container">
        <div className="logo-section">
          <Link to="nosotros" smooth={true} duration={500} className="logo">
            <img 
              src={MinkayLogo} 
              alt="Fundación MINK'AY" 
              className="logo-img"
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<span style="font-size: 2.5rem; color: #537A5A;">🌿</span>';
              }}
            />
            <div className="logo-text-container">
              <span className="logo-text">MINK'AY</span>
              <span className="logo-subtitle">FUNDACIÓN PARA EL DESARROLLO SOCIAL</span>
            </div>
          </Link>
        </div>
        
        <nav>
          <ul className="nav-menu">
            {navItems.map((item) => (
              <li key={item.to} className="nav-item">
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-120}
                  spy={true}
                  className="nav-link"
                  activeClass="nav-link-active"
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
                offset={-100}
                className="btn btn-donate-header"
              >
                DONAR AHORA
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;