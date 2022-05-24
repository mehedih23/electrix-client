import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { ClipLoader } from 'react-spinners';
import auth from '../../firebase.init';


const MyProfile = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [users, setUsers] = useState({})
    const [user, loading] = useAuthState(auth);


    useEffect(() => {
        fetch(`http://localhost:1111/user?email=${user?.email}`)
            .then(response => response.json())
            .then(data => setUsers(data))
    }, [setUsers, user?.email])



    // loadings //
    if (loading) {
        return <div className='h-screen flex justify-center items-center'>
            <ClipLoader loading={loading} size={150} />
        </div>
    }


    // from form-hook function //
    const onSubmit = data => {
        const userName = data.name;
        const phone = data.phone;
        const city = data.city;
        const streetAddress = data.sa;
        const postOffice = data.po;
        const postCode = data.pc;
        const education = data.education;
        const linkedInLink = data.linkedIn;
        const user = {
            userName,
            phone,
            city,
            streetAddress,
            postOffice,
            postCode,
            education,
            linkedInLink
        }

        fetch(`http://localhost:1111/user/${users?._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('Access-Token')}`
            },
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success("Information update successfully.", { id: 'update-info' })
                    reset();
                }
            })

    };
    return (
        <div>
            <h1 className='text-4xl font-bold'>Update Your Profile</h1>
            <form className='p-1 md:p-2 lg:p-4' onSubmit={handleSubmit(onSubmit)}>
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input
                    type="text"
                    {...register("name", { required: true })}
                    defaultValue={user?.displayName}
                    readOnly
                    className="input input-bordered w-full max-w-xs" />
                <label className="label"></label>
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input
                    type="email"
                    {...register("email", { required: true })}
                    defaultValue={user?.email}
                    readOnly
                    className="input input-bordered w-full max-w-xs" />
                <label className="label"></label>
                <label className="label">
                    <span className="label-text">Phone</span>
                </label>
                <input
                    type="number"
                    {...register("phone", {
                        required: {
                            value: true,
                            message: 'Phone number is required'
                        },
                        minLength: {
                            value: 10,
                            message: 'Phone number Must be 10 Digit'
                        }
                        ,
                        maxLength: {
                            value: 11,
                            message: 'Phone number can not be longer from 11 Digit'
                        }
                    })}
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    {errors.phone?.type === 'required' && <span className="label-text-alt text-sm text-red-600">{errors.phone.message}</span>}
                    {errors.phone?.type === 'minLength' && <span className="label-text-alt text-sm text-red-600">{errors.phone.message}</span>}
                    {errors.phone?.type === 'maxLength' && <span className="label-text-alt text-sm text-red-600">{errors.phone.message}</span>}
                </label>

                <label className="label">
                    <span className="label-text">City</span>
                </label>
                <input
                    type="text"
                    {...register("city", {
                        required: {
                            value: true,
                            message: 'City is required'
                        }
                    })}

                    className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    {errors.city?.type === 'required' && <span className="label-text-alt text-sm text-red-600">{errors.city.message}</span>}
                </label>

                <label className="label">
                    <span className="label-text">Post Office</span>
                </label>
                <input
                    type="text"
                    {...register("po", {
                        required: {
                            value: true,
                            message: 'Post Office is required'
                        }
                    })}

                    className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    {errors.po?.type === 'required' && <span className="label-text-alt text-sm text-red-600">{errors.po.message}</span>}
                </label>

                <label className="label">
                    <span className="label-text">Post Code</span>
                </label>
                <input
                    type="number"
                    {...register("pc", {
                        required: {
                            value: true,
                            message: 'Post Code is required'
                        },
                        minLength: {
                            value: 4,
                            message: 'Must Be 4 digit post code'
                        },
                        maxLength: {
                            value: 4,
                            message: 'Must Be 4 digit post code'
                        }
                    })}

                    className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    {errors.pc?.type === 'required' && <span className="label-text-alt text-sm text-red-600">{errors.pc.message}</span>}
                    {errors.pc?.type === 'minLength' && <span className="label-text-alt text-sm text-red-600">{errors.pc.message}</span>}
                    {errors.pc?.type === 'maxLength' && <span className="label-text-alt text-sm text-red-600">{errors.pc.message}</span>}
                </label>

                <label className="label">
                    <span className="label-text">Street Address</span>
                </label>
                <input
                    type="text"
                    {...register("sa", {
                        required: {
                            value: true,
                            message: 'Street Address is required'
                        }
                    })}

                    className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    {errors.sa?.type === 'required' && <span className="label-text-alt text-sm text-red-600">{errors.sa.message}</span>}
                </label>

                <label className="label">
                    <span className="label-text">Education</span>
                </label>
                <input
                    type="text"
                    {...register("education", {
                        required: {
                            value: true,
                            message: 'Education is required'
                        }
                    })}

                    className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    {errors.education?.type === 'required' && <span className="label-text-alt text-sm text-red-600">{errors.education.message}</span>}
                </label>

                <label className="label">
                    <span className="label-text">LinkedIn</span>
                </label>
                <input
                    type="text"
                    {...register("linkedin", {
                        required: {
                            value: true,
                            message: 'LinkedIn Link is required'
                        }
                    })}

                    className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    {errors.linkedin?.type === 'required' && <span className="label-text-alt text-sm text-red-600">{errors.linkedin.message}</span>}
                </label>


                <input type="submit" value="Update" className='btn btn-active w-full max-w-xs mt-3' />
            </form>
        </div>
    )
}

export default MyProfile