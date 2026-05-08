import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <img src="/brand_logo.png" alt="Adawnix Logo" className="logo-img" />
          <span className="logo-text">ADAWNIX</span>
        </Link>

        
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/career">Career</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme}>
            <i className={`bi bi-${theme === 'dark' ? 'sun' : 'moon-stars'}`}></i>
          </button>
          <Link to="/contact" className="btn-primary">Hire Us</Link>
        </div>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 20px 0;
          background: var(--glass-bg);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--glass-border);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.2rem;
          letter-spacing: 2px;
        }
        .logo-img {
          width: 42px;
          height: 42px;
          object-fit: contain;
          filter: drop-shadow(0 0 8px var(--primary-glow));
          transition: var(--transition);
        }
        .logo-img:hover {
          transform: scale(1.1) rotate(5deg);
          filter: drop-shadow(0 0 12px var(--primary-color));
        }


        .nav-links {
          display: flex;
          gap: 30px;
        }
        .nav-links a {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-muted);
        }
        .nav-links a:hover {
          color: var(--text-main);
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .theme-toggle {
          background: none;
          border: none;
          color: var(--text-main);
          font-size: 1.2rem;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;