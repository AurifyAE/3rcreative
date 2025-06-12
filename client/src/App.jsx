import './App.css'
import SplashScreen from './components/SplashScreen'
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ScrollToTop from './components/ScrollToTop';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const location = useLocation();
  const isSplashScreen = location.pathname === '/';

  return (
    <>  
        <ScrollToTop />
        {!isSplashScreen && <Navbar />}
        <Routes>
          <Route path='/' element={<SplashScreen />} />
          <Route path='/home' element={<Home />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
        {!isSplashScreen && <Footer />}
    </>
  )
}

export default App
