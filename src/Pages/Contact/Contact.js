import React, { useRef } from 'react'
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {
    // from form-hook //
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const form = useRef();

    const onSubmit = () => {
        emailjs.sendForm('service_6jp3hsl', 'template_htfjj34', form.current, 'NJQOqznCRy-P8c_fy')
            .then((result) => {
                if (result.status === 200) {
                    toast.success('Email Send Successfully.', { id: 'email-success' })
                    reset();
                }
            }, (error) => {
                if (error.status === 400) {
                    toast.error('Sorry, Service provider unavailble.', { id: 'email-error' })
                    reset();
                }
            });
    };
    return (
        <div className='my-12'>
            <h2 className='text-4xl text-center mb-4'>Anything To Say? <span className='text-primary'>Please Contact</span></h2>

            <div className='text-center'>
                <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                    <label className="label w-72 md:w-80 lg:w-96 mx-auto">
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
                        className="input input-bordered input-success w-72 md:w-80 lg:w-96" />
                    <label className="label w-72 md:w-80 lg:w-96 mx-auto">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-sm text-red-600">{errors?.name?.message}</span>}
                    </label>
                    <label className="label w-72 md:w-80 lg:w-96 mx-auto">
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
                        className="input input-bordered input-success w-72 md:w-80 lg:w-96" />
                    <label className="label w-72 md:w-80 lg:w-96 mx-auto">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-sm text-red-600">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-sm text-red-600">{errors.email.message}</span>}
                    </label>

                    <label className="label w-72 md:w-80 lg:w-96 mx-auto">
                        <span className="label-text">Subject</span>
                    </label>
                    <input
                        type="text"
                        {...register("subject", {
                            required: {
                                value: true,
                                message: 'Subject is required'
                            }
                        })}
                        placeholder="Type here"
                        className="input input-bordered input-success w-72 md:w-80 lg:w-96" />
                    <label className="label w-72 md:w-80 lg:w-96 mx-auto">
                        {errors.subject?.type === 'required' && <span className="label-text-alt text-sm text-red-600">{errors?.subject?.message}</span>}
                    </label>

                    <label className="label w-72 md:w-80 lg:w-96 mx-auto">
                        <span className="label-text">Message</span>
                    </label>
                    <textarea
                        type="text"
                        {...register("Message", {
                            required: {
                                value: true,
                                message: 'Message is required'
                            },
                            minLength: {
                                value: 100,
                                message: 'Must be 100 characters or longer'
                            }
                        })}
                        placeholder="Type here"
                        className="textarea textarea-bordered textarea-success w-72 md:w-80 lg:w-96" />
                    <label className="label w-72 md:w-80 lg:w-96 mx-auto">
                        {errors.Message?.type === 'required' && <span className="label-text-alt text-sm text-red-600">{errors.Message.message}</span>}
                        {errors.Message?.type === 'minLength' && <span className="label-text-alt text-sm text-red-600">{errors.Message.message}</span>}
                    </label>
                    <input type="submit" value="Send" className='btn btn-accent w-72 md:w-80 lg:w-96 mt-3' />
                </form>
            </div>
        </div>
    )
}

export default Contact