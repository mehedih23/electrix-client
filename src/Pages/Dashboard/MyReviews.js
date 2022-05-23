import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const MyReviews = () => {
    // from form-hook //
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [user] = useAuthState(auth);


    const onSubmit = data => {
        console.log(data)

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
                                value: 100,
                                message: 'Must be 100 character or longer'
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

                    <input type="submit" value="Register" className='btn btn-active  w-72 md:w-80 lg:w-96 mt-3' />
                </form>
            </div>
        </div>
    )
}

export default MyReviews