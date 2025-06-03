import './App.css'
import SplashScreen from './components/SplashScreen'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ScrollToTop from './components/ScrollToTop';

function App() {


  return (
    <>  
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<SplashScreen />} />
          <Route path='/home' element={<Home />} />
          <Route path='/services' element={<ServicesPage />} />
        </Routes>
    </>
  )
}

export default App
