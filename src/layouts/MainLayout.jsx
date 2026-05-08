import Navbar from '../components/Navbar';
import Body from '../components/Body';
import Footer from '../components/Footer';

const MainLayout = ({ children, theme, toggleTheme, toggleProfile }) => {
  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} toggleProfile={toggleProfile} />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;