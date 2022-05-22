import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='app'>
      <Navbar></Navbar>
      <div className='max-w-7xl mx-auto lg:px-12'>




        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
        </Routes>






      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
