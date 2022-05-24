import { signOut } from 'firebase/auth';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import auth from '../../firebase.init';

const MyReviews = () => {
    const navigate = useNavigate();

    // from form-hook //
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <div className='h-screen flex justify-center items-center'>
            <ClipLoader loading={loading} size={150} />
        </div>
    }


    const onSubmit = data => {
        const name = data.name;
        const email = data.email;
        const review = data.review;
        const rating = data.ratings;
        const testimonial = { name, email, review, rating }
        fetch('http://localhost:1111/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('Access-Token')}`
            },
            body: JSON.stringify(testimonial)
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
                    reset();
                    toast.success('Review post successfully.')
                }
            })
    };
    return (
        <div className='p-2 md:p-4 lg:p-8'>
            <h2 className='text-3xl'>Leave a quote for us - </h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input
                        type="text"
                        {...register("name")}
                        defaultValue={user?.displayName}
                        readOnly
                        className="input input-bordered w-72 md:w-80 lg:w-96" />
                    <label className="label"></label>
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        defaultValue={user?.email}
                        {...register("email")}
                        className="input input-bordered  w-72 md:w-80 lg:w-96" />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-sm text-red-600">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-sm text-red-600">{errors.email.message}</span>}
                    </label>
                    <label className="label">
                        <span className="label-text">Review</span>
                    </label>
                    <textarea
                        type="text"
                        {...register("review", {
                            required: {
                                value: true,
                                message: 'Quote is required'
                            },
                            minLength: {
                                value: 25,
                                message: 'Must be 25 character or longer'
                            }
                        })}
                        placeholder="Type here"
                        className="textarea textarea-bordered  w-72 md:w-80 lg:w-96" />
                    <label className="label">
                        {errors.review?.type === 'required' && <span className="label-text-alt text-sm text-red-600">{errors.review.message}</span>}
                        {errors.review?.type === 'minLength' && <span className="label-text-alt text-sm text-red-600">{errors.review.message}</span>}
                    </label>

                    <label className="label">
                        <span className="label-text">Ratings</span>
                    </label>
                    <input
                        type="number"
                        {...register("ratings", {
                            required: {
                                value: true,
                                message: 'Must be Between 1 and 5'
                            },
                            min: {
                                value: 1,
                                message: 'Must be Between 1 and 5'
                            },
                            max: {
                                value: 5,
                                message: 'Must be Between 1 and 5'
                            }
                        })}
                        placeholder="Type here"
                        className="input input-bordered  w-72 md:w-80 lg:w-96" />
                    <label className="label">
                        {errors.ratings?.type === 'required' && <span className="label-text-alt text-sm text-red-600">{errors.ratings.message}</span>}
                        {errors.ratings?.type === 'min' && <span className="label-text-alt text-sm text-red-600">{errors.ratings.message}</span>}
                        {errors.ratings?.type === 'max' && <span className="label-text-alt text-sm text-red-600">{errors.ratings.message}</span>}
                    </label>

                    <input type="submit" value="Post" className='btn btn-active  w-72 md:w-80 lg:w-96 mt-3' />
                </form>
            </div>
        </div>
    )
}

export default MyReviews