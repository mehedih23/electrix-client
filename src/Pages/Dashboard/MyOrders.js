import { signOut } from 'firebase/auth';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import auth from '../../firebase.init'
import Order from './Order';

const MyOrders = () => {
    const navigate = useNavigate();
    const [user, loading] = useAuthState(auth);

    const { isLoading, error, data: orders, refetch } = useQuery('myOrders', () =>
        fetch(`http://localhost:1111/order?email=${user?.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('Access-Token')}`
            }
        }).then(res => {
            if (res.status === 401 || res.status === 403) {
                signOut(auth);
                navigate('/');
            } else {
                return res.json()
            }
        }
        )
    )

    if (error) return 'An error has occurred: ' + error.message;

    // loadings //
    if (loading || isLoading) {
        return <div className='h-screen flex justify-center items-center'>
            <ClipLoader loading={loading || isLoading} size={150} />
        </div>
    }


    return (
        <div className='my-6'>
            <h2 className='text-4xl my-4'>You have purchase total {orders.length} orders.</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>sl no.</th>
                            <th>Email</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <Order
                                key={order._id}
                                order={order}
                                index={index}
                                refetch={refetch}
                            ></Order>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MyOrders