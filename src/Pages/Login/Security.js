import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Security = () => {
    return (
        <div className='my-8'>
            <h2 className='text-4xl text-accent text-center my-4'>Welcome Back Chief</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10'>
                <div className='flex items-center flex-col'>
                    <div className='w-full flex justify-between items-center px-2 md:px-4 lg:px-8'>
                        <NavLink className='btn' to='/security'>Login</NavLink>
                        <NavLink className='btn' to='/security/signup'>Sign Up</NavLink>
                    </div>
                    <div>
                        <Outlet></Outlet>
                    </div>

                </div>

                <div>
                    <img src="https://i.ibb.co/gvgmZkW/20944201.jpg" alt="security" />
                </div>
            </div>
        </div>
    )
}

export default Security