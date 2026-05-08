import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-info">
            <div className="footer-logo">
              <img src="/brand_logo.png" alt="Adawnix Logo" className="logo-img" />
              <span className="logo-text">adwanix</span>

            </div>

            <p className="footer-desc">
              Engineering the future with intelligent digital solutions. 
              We transform complex data into actionable insights.
            </p>
            <div className="footer-socials">
              <a href="#"><i className="bi bi-twitter-x"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
              <a href="#"><i className="bi bi-github"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
          
          <div className="footer-newsletter">
            <h4>Newsletter</h4>
            <p>Subscribe to get the latest updates.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Email address" />
              <button className="btn-primary-sm">Join</button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2026 adwanix (Advijith Kumar). All rights reserved.</p>


          <div className="status-indicator">
            <span className="pulse-dot"></span>
            <span>System Status: Operational</span>
          </div>
        </div>
      </div>

      <style>{`
        .footer-section {
          background: var(--bg-color);
          padding: 80px 0 40px;
          border-top: 1px solid var(--glass-border);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 2fr;
          gap: 50px;
          margin-bottom: 60px;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.2rem;
          margin-bottom: 20px;
        }
        .logo-img {
          width: 36px;
          height: 36px;
          object-fit: contain;
          filter: drop-shadow(0 0 5px var(--primary-glow));
        }


        .footer-desc {
          color: var(--text-muted);
          font-size: 0.9rem;
          margin-bottom: 25px;
          line-height: 1.6;
        }
        .footer-socials {
          display: flex;
          gap: 15px;
        }
        .footer-socials a {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          transition: var(--transition);
        }
        .footer-socials a:hover {
          background: var(--primary-color);
          color: var(--text-main);

          transform: translateY(-3px);
        }
        .footer-links h4, .footer-newsletter h4 {
          margin-bottom: 20px;
          font-size: 1.1rem;
        }
        .footer-links ul li {
          margin-bottom: 12px;
        }
        .footer-links ul li a {
          color: var(--text-muted);
          font-size: 0.9rem;
        }
        .footer-links ul li a:hover {
          color: var(--primary-color);
          padding-left: 5px;
        }
        .newsletter-form {
          display: flex;
          gap: 10px;
          margin-top: 15px;
        }
        .newsletter-form input {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
          border-radius: 8px;
          padding: 10px 15px;
          color: var(--text-main);

          flex: 1;
        }
        .btn-primary-sm {
          background: var(--primary-color);
          border: none;
          color: var(--bg-color);

          padding: 10px 20px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
        }
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 30px;
          border-top: 1px solid var(--glass-border);
          color: var(--text-muted);
          font-size: 0.8rem;
        }
        .status-indicator {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .pulse-dot {
          width: 8px;
          height: 8px;
          background: var(--accent-green);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--accent-green);
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }
        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 576px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 15px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;