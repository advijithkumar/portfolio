import React from 'react';

const Navbar = ({ theme, toggleTheme, toggleProfile }) => {
  return (
    <nav>
      <div className="nav-logo">
        <div className="status-indicator">
          <div className="dot"></div>
          <h1>adawnix</h1>
        </div>
      </div>
      <div className="nav-actions">
        <button
          className="fui-btn-icon"
          onClick={toggleTheme}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          <i className={`bi bi-${theme === 'dark' ? 'sun' : 'moon-stars'}`}></i>
        </button>
        <button
          className="fui-btn-icon"
          title="View Profile"
          onClick={toggleProfile}
        >
          <i className="bi bi-person-circle"></i>
        </button>
      </div>
    </nav>
  );
};
export default Navbar;