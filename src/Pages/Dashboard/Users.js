import { signOut } from 'firebase/auth'
import React from 'react'
import toast from 'react-hot-toast'
import Swal from 'sweetalert2'
import auth from '../../firebase.init'
import { useNavigate } from 'react-router-dom';


const Users = ({ user, index, refetch }) => {
    const { _id, email, userName, role } = user;

    const navigate = useNavigate()


    const handleUpdate = () => {
        fetch(`http://localhost:1111/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('Access-Token')}`
            }
        })
            .then(response => {
                if (response.status === 403) {
                    toast.error("Can't be an admin", { id: 'admin-error' })
                } else {
                    return response.json()
                }
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Make admin successfully', { id: 'admin-success' })
                }
            })
    }


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
                    'User Removed Successfully.',
                    'success',
                    fetch(`http://localhost:1111/users/${_id}`, {
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
            <td>{userName || <span className='text-red-500 font-bold'>Not Updated</span>}</td>
            <td>{email}</td>
            <td>
                {role ? <span className='text-accent font-bold text-xl'>Admin</span> : <>
                    <button
                        onClick={handleUpdate}
                        className='btn btn-sm btn-outline btn-primary'
                    >Make Admin</button> <button
                        onClick={handleDelete}
                        className='btn btn-sm btn-error'
                    >Remove</button>
                </>
                }
            </td>
        </tr>
    )
}

export default Users