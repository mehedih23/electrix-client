import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo/logo1.png'

const Navbar = () => {
    const menu = <>
        <li className='mx-2'><NavLink className='font-bold' to='/'>Home</NavLink></li>
        <li className='mx-2'><NavLink className='font-bold' to='/about'>about</NavLink></li>
        <li className='mx-2'><NavLink className='font-bold' to='/blog'>blog</NavLink></li>
        <li className='mx-2'><NavLink className='font-bold' to='/products'>products</NavLink></li>
        <li className='mx-2'><NavLink className='font-bold' to='/contact'>contact</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <Link to='/'><img src={logo} alt="logo" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menu}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-outline btn-accent rounded-full"><Link to='login'>Log In</Link></button>
            </div>
        </div>
    )
}

export default Navbar