import { signOut } from 'firebase/auth'
import React from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import auth from '../../firebase.init'

const ManageTool = ({ tool, index, refetch }) => {
    const navigate = useNavigate()
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
                    fetch(`https://limitless-headland-17774.herokuapp.com/tool/${tool._id}`, {
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
            <td>
                <div class="avatar">
                    <div class="w-16 rounded">
                        <img src={tool.image} alt="Tailwind-CSS-Avatar-component" />
                    </div>
                </div>
            </td>
            <td>{tool.name}</td>
            <td>
                <button
                    onClick={handleDelete}
                    className='btn btn-error btn-sm'
                >Delete</button>
            </td>
        </tr>
    )
}

export default ManageTool