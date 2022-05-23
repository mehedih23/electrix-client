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
import Purchase from './Pages/Purchase/Purchase';
import RequireAuth from './Pages/Login/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyReviews from './Pages/Dashboard/MyReviews';
import MyProfile from './Pages/Dashboard/MyProfile';
import { Toaster } from 'react-hot-toast';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='app'>
      <Toaster></Toaster>
      <Navbar></Navbar>
      <div className='max-w-7xl mx-auto lg:px-12'>




        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/purchase/:id' element={<RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>}></Route>
          <Route path='/security' element={<Security></Security>}>
            <Route index element={<Login></Login>}></Route>
            <Route path='/security/signup' element={<Signup></Signup>}></Route>
          </Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}>
            <Route index element={<MyOrders></MyOrders>}></Route>
            <Route path='/dashboard/reviews' element={<MyReviews></MyReviews>}></Route>
            <Route path='/dashboard/profile' element={<MyProfile></MyProfile>}></Route>
          </Route>
        </Routes>






      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
