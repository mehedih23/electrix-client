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
import Payment from './Pages/Dashboard/Payment';
import AllUsers from './Pages/Dashboard/AllUsers';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddTool from './Pages/Dashboard/AddTool';
import ManageTools from './Pages/Dashboard/ManageTools';
import ManageOrders from './Pages/Dashboard/ManageOrders';

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

          <Route path='/dashboard' element={<RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>}>
            <Route index element={<MyProfile></MyProfile>}></Route>
            <Route path='/dashboard/order' element={<MyOrders></MyOrders>}></Route>
            <Route path='/dashboard/add-tool' element={<AddTool></AddTool>}></Route>
            <Route path='/dashboard/manage-tool' element={<ManageTools></ManageTools>}></Route>
            <Route path='/dashboard/manage-all-order' element={<ManageOrders></ManageOrders>}></Route>
            <Route path='/dashboard/reviews' element={<MyReviews></MyReviews>}></Route>
            <Route path='/dashboard/payment/:id' element={<Payment></Payment>}></Route>
            <Route path='/dashboard/users' element={<RequireAdmin>
              <AllUsers></AllUsers>
            </RequireAdmin>}></Route>
          </Route>

        </Routes>






      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
