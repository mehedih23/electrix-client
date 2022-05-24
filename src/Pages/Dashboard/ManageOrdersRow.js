import { signOut } from 'firebase/auth'
import React from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import auth from '../../firebase.init'

const ManageOrdersRow = ({ order, index, refetch }) => {
    const navigate = useNavigate()

    // Update Paid orders //
    const handleUpdate = () => {
        fetch(`http://localhost:1111/manage/order/${order._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('Access-Token')}`
            },
            body: JSON.stringify({ status: 'shipped' })
        })
            .then(response => response.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Item Shipped Successfully', { id: 'shipped-success' })
                    refetch();
                }
            })
    }


    // Delete Unpaid orders //
    const handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                Swal.fire(
                    'Deleted!',
                    'Your item has been deleted.',
                    'success',
                    fetch(`http://localhost:1111/order/${order._id}`, {
                        method: 'DELETE',
                        headers: {
                            'authorization': `Bearer ${localStorage.getItem('Access-Token')}`
                        }
                    })
                        .then(response => {
                            if (response.status === 401 || response.status === 403) {
                                signOut(auth);
                                toast.error('Token expired', { id: 'token-error' });
                                navigate('/');
                            } else {
                                return response.json()
                            }
                        })
                        .then(data => {
                            if (data.acknowledged) {
                                refetch();
                            }
                        })

                )
            }
        })

    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{order.email}</td>
            <td>{order.productName}</td>
            <td>{order.orderQuantity}</td>
            <td><span className='font-bold'>{order.status || 'Unpaid'}</span></td>
            <td>
                {order.paid && order.status === 'shipped' && <span> </span>}
                {order.paid && order.status === 'pending' && <button
                    onClick={handleUpdate}
                    className='btn btn-sm btn-accent'
                >Update</button>}
                {!order.paid && <button
                    onClick={handleDelete}
                    className='btn btn-sm btn-error btn-outline'
                >Delete</button>}
            </td>
        </tr>
    )
}

export default ManageOrdersRow