import React from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';


const Signup = () => {
    // from form-hook //
    const { register, formState: { errors }, handleSubmit } = useForm();



    const onSubmit = data => {
        console.log(data)

    };
    return (
        <div>
            <h1 className='text-3xl text-center underline text-green-700'>Sign Up</h1>
            <div className='w-full my-4'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input
                        type="text"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is required'
                            }
                        })}
                        placeholder="Type here"
                        className="input input-bordered w-72 md:w-80 lg:w-96" />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-sm text-red-600">{errors?.name?.message}</span>}
                    </label>
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is required'
                            },
                            pattern: {
                                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                message: 'Provide a valid email address'
                            }
                        })}
                        placeholder="Type here"
                        className="input input-bordered  w-72 md:w-80 lg:w-96" />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-sm text-red-600">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-sm text-red-600">{errors.email.message}</span>}
                    </label>
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        {...register("password", {
                            required: {
                                value: true,
                                message: 'Password is required'
                            },
                            pattern: {
                                value: /^(?=.*[\W])[\w\W]{6,20}$/,
                                message: 'One special character required'
                            },
                            minLength: {
                                value: 6,
                                message: 'Must be 6 characters longer'
                            }
                            ,
                            maxLength: {
                                value: 20,
                                message: 'Must be 20 characters smaller'
                            }
                        })}
                        placeholder="Type here"
                        className="input input-bordered  w-72 md:w-80 lg:w-96" />
                    <label className="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-sm text-red-600">{errors.password.message}</span>}
                        {errors.password?.type === 'pattern' && <span className="label-text-alt text-sm text-red-600">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-sm text-red-600">{errors.password.message}</span>}
                        {errors.password?.type === 'maxLength' && <span className="label-text-alt text-sm text-red-600">{errors.password.message}</span>}
                    </label>
                    <input type="submit" value="Register" className='btn btn-active  w-72 md:w-80 lg:w-96 mt-3' />
                </form>
            </div>

            <p className='my-4'>Already Have an Account? <Link to='/security' className='text-secondary font-bold'>Login</Link></p>
            <div className="divider mb-4">OR</div>

            <button
                // onClick={() => signInWithGoogle()}
                className='btn btn-outline btn-accent  w-72 md:w-80 lg:w-96'
            >CONTINUE WITH GOOGLE
            </button>
        </div>
    )
}

export default Signup