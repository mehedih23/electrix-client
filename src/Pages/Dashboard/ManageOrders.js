import { signOut } from 'firebase/auth';
import React from 'react'
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import auth from '../../firebase.init';
import ManageOrdersRow from './ManageOrdersRow';

const ManageOrders = () => {
    const navigate = useNavigate();
    const { isLoading, error, data: orders, refetch } = useQuery('ManageOrders', () =>
        fetch(`https://limitless-headland-17774.herokuapp.com/orders`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('Access-Token')}`
            }
        }).then(res => {
            if (res.status === 401 || res.status === 403) {
                signOut(auth);
                toast.error('Token expired', { id: 'token-error' });
                navigate('/');
            } else {
                return res.json()
            }
        }
        )
    )

    if (error) return 'An error has occurred: ' + error.message;

    // loadings //
    if (isLoading) {
        return <div className='h-screen flex justify-center items-center'>
            <ClipLoader loading={isLoading} size={150} />
        </div>
    }


    return (
        <>
            <h3 className='text-3xl my-4'>Manage All Order</h3>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>sl no.</th>
                            <th>Email</th>
                            <th>Order Item</th>
                            <th>Quantity</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <ManageOrdersRow
                                key={order._id}
                                order={order}
                                index={index}
                                refetch={refetch}
                            ></ManageOrdersRow>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ManageOrders