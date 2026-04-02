import { useState, useEffect } from 'react';

const Footer = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="status-indicator">
          <div className="dot"></div>
          <span> <span className="fui-time-glow">{time}</span></span>
        </div>
        <div className="social-readout">
          <i className="bi bi-instagram fui-icon-proximity"></i>
          <i className="bi bi-github fui-icon-proximity"></i>
          <i className="bi bi-linkedin fui-icon-proximity"></i>
        </div>
        <div className="footer-copyright">
          <span>© 2026 advijithkumar</span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;