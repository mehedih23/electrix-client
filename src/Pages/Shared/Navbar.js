import { signOut } from 'firebase/auth'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, NavLink } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import logo from '../../assets/logo/logo1.png'
import auth from '../../firebase.init'

const Navbar = () => {
    const [user, loading] = useAuthState(auth);

    // loading //
    if (loading) {
        return <div className='h-screen flex justify-center items-center'>
            <ClipLoader loading={loading} size={150} />
        </div>
    }


    const menu = <>
        <li className='mx-2'><NavLink className='font-bold' to='/'>Home</NavLink></li>
        {user && <>
            <li className='mx-2'><NavLink className='font-bold' to='/dashboard'>Dashboard</NavLink></li>
        </>}
        <li className='mx-2'><NavLink className='font-bold' to='/blog'>Blog</NavLink></li>
        <li className='mx-2'><NavLink className='font-bold' to='/portfolio'>My Portfolio</NavLink></li>
        <li className='mx-2'><NavLink className='font-bold' to='/contact'>Contact Us</NavLink></li>
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
                {user ? <span className='font-bold mr-4'>{user?.displayName?.split(' ')[0]}</span> : ' '}
                {user ? <button onClick={() => signOut(auth)} className="btn btn-outline btn-accent rounded-full"><Link to='/'>Log Out</Link></button> : <button className="btn btn-outline btn-accent rounded-full"><Link to='/security'>Log In</Link></button>}
            </div>
        </div>
    )
}

export default Navbar