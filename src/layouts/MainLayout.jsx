import Navbar from '../components/Navbar';
import Body from '../components/Body';
import Footer from '../components/Footer';

const MainLayout = ({ theme, toggleTheme, toggleProfile, setZoomImg }) => {
  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} toggleProfile={toggleProfile} />
      <main className="container">
        <Body setZoomImg={setZoomImg} />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;