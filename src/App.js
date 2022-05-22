import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Security from './Pages/Login/Security';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';

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
          <Route path='/security' element={<Security></Security>}>
            <Route index element={<Login></Login>}></Route>
            <Route path='/security/signup' element={<Signup></Signup>}></Route>
          </Route>
        </Routes>






      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
