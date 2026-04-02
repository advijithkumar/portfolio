import React from 'react';
import './ProfileModal.css';

const ProfileModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fui-modal-overlay">
      <div className="fui-modal">
        {/* FUI Corners */}
        <div className="fui-corner tl"></div>
        <div className="fui-corner tr"></div>
        <div className="fui-corner bl"></div>
        <div className="fui-corner br"></div>

        <button className="fui-modal-close" onClick={onClose}>
          ✕ close_session
        </button>

        <div className="profile-header">
          <div className="fui-section-label">// identity_access_v1</div>
          <h2 className="profile-title">AdDawnix_OS // CORE</h2>
          <p className="profile-subtitle">Computer Science Engineer | R&D Specialist</p>
        </div>

        <div className="profile-content">
          <div className="profile-section">
            <span className="profile-label">// mission_statement</span>
            <p>
              I am a passionate Computer Science Engineer focused on building custom backend systems, 
              real-time applications, and efficient database solutions. I specialize in Node.js and 
              PostgreSQL, with deep expertise in Linux systems and server management.
            </p>
          </div>

          <div className="profile-section">
            <span className="profile-label">// multi_platform_development</span>
            <ul className="skill-list">
              <li className="skill-tag">Flutter (Android/iOS)</li>
              <li className="skill-tag">React Web Apps</li>
              <li className="skill-tag">Offline-First Design</li>
              <li className="skill-tag">Node.js Core</li>
              <li className="skill-tag">PostgreSQL Architecture</li>
            </ul>
          </div>

          <div className="profile-section">
            <span className="profile-label">// research_and_hardware</span>
            <p>
              Currently exploring hardware systems and microcontrollers to control hardware directly 
              — a fundamental step towards bridging software and physical systems.
            </p>
          </div>

          <div className="profile-section">
            <span className="profile-label">// expertise_focus</span>
            <p>
              I thrive on designing precision, real-time systems, exploring R&D-driven projects, 
              and solving complex technical challenges. From developing MVPs for emergency 
              services to experimenting with advanced autonomous systems, I strive to turn ideas 
              into functional, scalable solutions for real-time impact.
            </p>
          </div>
        </div>

        <div className="fui-scanline"></div>
        <div className="status-indicator" style={{ fontSize: '0.7rem' }}>
          <div className="dot"></div>
          <span>System learning: ACTIVE_STATE // STATUS: ALWAYS_EVOLVING</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
