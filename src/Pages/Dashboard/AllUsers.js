import { signOut } from 'firebase/auth';
import React from 'react'
// import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import auth from '../../firebase.init';
import Users from './Users';

const AllUsers = () => {
    const navigate = useNavigate();
    // const [user, loading] = useAuthState(auth);


    const { isLoading, error, data: users, refetch } = useQuery('users', () =>
        fetch(`http://localhost:1111/users`, {
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
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>sl no.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <Users
                            key={user._id}
                            index={index}
                            user={user}
                            refetch={refetch}
                        ></Users>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AllUsers