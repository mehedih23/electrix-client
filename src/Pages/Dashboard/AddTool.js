import { signOut } from 'firebase/auth';
import React from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const AddTool = () => {
    const navigate = useNavigate();
    // from form-hook //
    const { register, formState: { errors }, handleSubmit } = useForm();



    const onSubmit = data => {
        const name = data.name;
        const description = data.description;
        const image = data.image;
        const price = data.price;
        const min_order = data.minOrder;
        const available_quantity = data.availableQuantity;
        const toolInfo = { name, description, image, price, min_order, available_quantity };

        if (parseInt(min_order) > parseInt(available_quantity) || parseInt(min_order) === parseInt(available_quantity)) {
            toast.error('You have to manufacture more than min quantity you set', { id: 'min-q' })
        } else {
            fetch('http://localhost:1111/tool', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('Access-Token')}`
                },
                body: JSON.stringify(toolInfo)
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
                        toast.success('Tool added successfully.')
                        navigate('/');
                    }
                })
        }



    };
    return (
        <div className='px-1 md:px-2 lg:px-4'>
            <h3 className='text-3xl my-4'>Add a tool for manufacture - </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="label">
                    <span className="label-text">Product Image Link</span>
                </label>
                <input
                    type="text"
                    {...register("image", {
                        required: {
                            value: true,
                            message: 'Image is required'
                        }
                    })}
                    placeholder="Type here"
                    className="input input-bordered w-72 md:w-80 lg:w-96" />
                <label className="label">
                    {errors.image?.type === 'required' && <span className="label-text-alt text-sm text-red-600">{errors?.image?.message}</span>}
                </label>
                <label className="label">
                    <span className="label-text">Product Name</span>
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
                    <span className="label-text">Product Description</span>
                </label>
                <textarea
                    type="text"
                    {...register("description", {
                        required: {
                            value: true,
                            message: 'Description is required'
                        },
                        minLength: {
                            value: 200,
                            message: 'Please describe at least 200 characters or more'
                        }
                    })}
                    placeholder="Type here"
                    className="textarea textarea-bordered w-72 md:w-80 lg:w-96" />
                <label className="label">
                    {errors.description?.type === 'required' && <span className="label-text-alt text-sm text-red-600">{errors?.description?.message}</span>}
                    {errors.description?.type === 'minLength' && <span className="label-text-alt text-sm text-red-600">{errors?.description?.message}</span>}
                </label>
                <label className="label">
                    <span className="label-text">Price/piece</span>
                </label>
                <input
                    type="number"
                    {...register("price", {
                        required: {
                            value: true,
                            message: 'Price is required'
                        },
                        min: {
                            value: 1,
                            message: 'Price can not be a negative value'
                        }
                    })}
                    placeholder="Type here"
                    className="input input-bordered w-72 md:w-80 lg:w-96" />
                <label className="label">
                    {errors.price?.type === 'required' && <span className="label-text-alt text-sm text-red-600">{errors?.price?.message}</span>}
                    {errors.price?.type === 'min' && <span className="label-text-alt text-sm text-red-600">{errors?.price?.message}</span>}
                </label>
                <label className="label">
                    <span className="label-text">Min Order Quantity</span>
                </label>
                <input
                    type="number"
                    {...register("minOrder", {
                        required: {
                            value: true,
                            message: 'Minimum Order Quantity is required'
                        },
                        min: {
                            value: 50,
                            message: 'Min Quantity can not set less than 50'
                        }
                    })}
                    placeholder="Type here"
                    className="input input-bordered w-72 md:w-80 lg:w-96" />
                <label className="label">
                    {errors.minOrder?.type === 'required' && <span className="label-text-alt text-sm text-red-600">{errors?.minOrder?.message}</span>}
                    {errors.minOrder?.type === 'min' && <span className="label-text-alt text-sm text-red-600">{errors?.minOrder?.message}</span>}
                </label>
                <label className="label">
                    <span className="label-text">Available Quantity</span>
                </label>
                <input
                    type="number"
                    {...register("availableQuantity", {
                        required: {
                            value: true,
                            message: 'Available Quantity is required'
                        },
                        min: {
                            value: 150,
                            message: '150 Min Available Quantity You have to'
                        }
                    })}
                    placeholder="Type here"
                    className="input input-bordered w-72 md:w-80 lg:w-96" />
                <label className="label">
                    {errors.availableQuantity?.type === 'required' && <span className="label-text-alt text-sm text-red-600">{errors?.availableQuantity?.message}</span>}
                    {errors.availableQuantity?.type === 'min' && <span className="label-text-alt text-sm text-red-600">{errors?.availableQuantity?.message}</span>}
                </label>

                <input type="submit" value="Add" className='btn btn-active  w-72 md:w-80 lg:w-96 mt-3' />
            </form>
        </div>
    )
}

export default AddTool