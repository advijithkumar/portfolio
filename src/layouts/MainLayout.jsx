import Navbar from '../components/Navbar';
import Body from '../components/Body';
import Footer from '../components/Footer';
import '../index.css'; 
const MainLayout = ()=> {
    return(
        <>
         <Navbar/>
         <div className="container">
            <Body/>
            <Footer/>
         </div>
        </>
       
    )
}
export default MainLayout;