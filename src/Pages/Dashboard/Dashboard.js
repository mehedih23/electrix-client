import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom'
import { ClipLoader } from 'react-spinners';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth)
    const [admin] = useAdmin(user);

    // loadings //
    if (loading) {
        return <div className='h-screen flex justify-center items-center'>
            <ClipLoader loading={loading} size={150} />
        </div>
    }



    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content my-8">
                <div className='flex justify-between lg:block'>
                    <h3 className='text-3xl text-center text-secondary font-bold'>Dashboard</h3>
                    <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                </div>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">

                    <li><Link to='/dashboard'>My Profile</Link></li>

                    {
                        !admin && user && <>
                            <li><Link to='/dashboard/order'>My Orders</Link></li>
                            <li><Link to='/dashboard/reviews'>Add Review</Link></li>
                        </>
                    }


                    {
                        admin && user && <>
                            <li><Link to='/dashboard/users'>All User</Link></li>
                            <li><Link to='/dashboard/manage-all-order'>Manage Orders</Link></li>
                            <li><Link to='/dashboard/add-tool'>Add a Tool</Link></li>
                            <li><Link to='/dashboard/manage-tool'>Manage Tools</Link></li>
                        </>
                    }
                </ul>

            </div>
        </div>
    )
}

export default Dashboard