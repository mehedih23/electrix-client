import { signOut } from 'firebase/auth';
import React from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import auth from '../../firebase.init';

const Order = ({ order, index, refetch }) => {
    const navigate = useNavigate()
    const { _id, email, productName, orderQuantity, total, paid, transactionId, status } = order;

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
                    fetch(`https://limitless-headland-17774.herokuapp.com/order/${_id}`, {
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
        <tr >
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{productName}</td>
            <td>{orderQuantity}</td>
            <td>${total}</td>
            <td>
                {paid && status === 'pending' && <>
                    <p className='font-bold text-green-500'>Paid</p>
                    <p className='font-bold text-green-500'>TrxId : {transactionId}</p>
                </>}
                {paid && status === 'shipped' && <>
                    <p className='font-bold text-green-500'>{status}</p>
                    <p className='font-bold text-green-500'>TrxId : {transactionId}</p>
                </>}
                {!paid && <>
                    <button
                        onClick={() => navigate(`/dashboard/payment/${_id}`)}
                        className='btn btn-accent btn-sm'
                    >Pay</button>  <button
                        onClick={handleDelete}
                        className='btn btn-error btn-sm'
                    >Delete</button>
                </>
                }
            </td>
        </tr >
    )
}

export default Order