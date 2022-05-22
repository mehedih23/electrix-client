import React from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
    // from form-hook //
    const { register, formState: { errors }, handleSubmit } = useForm();




    // errors //
    /* let signInError;
    if (error || errorGoogle) {
        signInError = <span className='text-sm text-red-600'>{error?.message || errorGoogle?.message}</span>
    } */


    const onSubmit = data => {
        console.log(data)

    };
    return (
        <div>
            <h2 className="text-3xl text-center font-bold">Login</h2>
            <form className='' onSubmit={handleSubmit(onSubmit)}>

                {/* email field start */}
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input
                    type="email"
                    {...register("email", {
                        required: {
                            value: true,
                            message: 'Email is required'
                        }
                    })}
                    placeholder="Type here"
                    className="input input-bordered  w-72 md:w-80 lg:w-96" />
                <label className="label">
                    {errors.email?.type === 'required' && <span className="label-text-alt text-sm text-red-600">{errors.email.message}</span>}
                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-sm text-red-600">{errors.email.message}</span>}
                </label>
                {/* email field end */}


                {/* password field start */}
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input
                    type="password"
                    {...register("password", {
                        required: {
                            value: true,
                            message: 'Password is required'
                        }
                    })}
                    placeholder="Type here"
                    className="input input-bordered  w-72 md:w-80 lg:w-96" />
                <label className="label">
                    {/* password error */}
                    {errors.password?.type === 'required' && <span className="label-text-alt text-sm text-red-600">{errors.password.message}</span>}
                </label>
                {/* password field end */}

                {/* forgot password start */}
                <p><Link to='/forgot-password' className='text-sm underline text-secondary'>Forgot Password?</Link></p>
                {/* forgot password end */}
                <input type="submit" value="Login" className='btn btn-active  w-72 md:w-80 lg:w-96 mt-3' />
            </form>
            {/* {signInError} */}

            <p className='my-4'>New to Doctors Portal? <Link to='/security/signup' className='text-secondary font-bold'>Create an account</Link></p>
            <div className="divider mb-4">OR</div>
            <button
                // onClick={() => signInWithGoogle()}
                className='btn btn-outline w-72 md:w-80 lg:w-96 btn-accent'
            >CONTINUE WITH GOOGLE
            </button>
        </div>
    )
}

export default Login