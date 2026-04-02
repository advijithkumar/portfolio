import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ProfileModal from './components/ProfileModal';
import './index.css'; 

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('fui-theme') || 'dark';
  });
  const [showProfile, setShowProfile] = useState(false);
  const [zoomImg, setZoomImg] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('fui-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const toggleProfile = () => setShowProfile(!showProfile);

  return (
    <>
      <MainLayout 
        theme={theme} 
        toggleTheme={toggleTheme} 
        toggleProfile={toggleProfile}
        setZoomImg={setZoomImg}
      >
        <Routes>
          <Route path="/" element={<div className="fui-welcome">// system_ready: status_ok</div>} />
        </Routes>
      </MainLayout>
      <ProfileModal isOpen={showProfile} onClose={() => setShowProfile(false)} />
      
      {/* ── Global Zoom Overlay ────────────────── */}
      {zoomImg && (
        <div 
          className="fui-zoom-overlay" 
          onClick={() => setZoomImg(null)}
          style={{ cursor: 'pointer' }}
        >
          <div className="fui-zoom-container" onClick={(e) => e.stopPropagation()} style={{ cursor: 'default' }}>
            <img src={zoomImg.src} alt={zoomImg.alt} className="fui-zoom-img" />
            <div className="fui-zoom-label">// {zoomImg.alt.toLowerCase()} _preview</div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
