import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom'
import auth from '../../firebase.init';

const Purchase = () => {
    const { id } = useParams();
    const [tool, setTool] = useState({});
    const [user] = useAuthState(auth);


    const { name, image, description, price, min_order, available_quantity } = tool;
    useEffect(() => {
        fetch(`http://localhost:1111/tool/${id}`)
            .then(response => response.json())
            .then(data => setTool(data))
    }, [id])


    const handlePlaceOrder = (e) => {
        e.preventDefault();

        const productName = name;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const address = e.target.address.value;
        const orderQuantity = e.target.minOrder.value;

        const total = (parseInt(orderQuantity) * parseFloat(price)).toFixed(2);

        const order = {
            productName,
            email,
            phone,
            address,
            orderQuantity,
            total
        }

        if (parseInt(orderQuantity) < parseInt(min_order)) {
            toast.error('You can not purchase less piece of items.', { id: 'less' })
        } else if (parseInt(orderQuantity) > parseInt(available_quantity)) {
            toast.error('You can not purchase more piece of items.', { id: 'more' })
        } else {
            fetch('http://localhost:1111/order', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(order)
            })
                .then(response => response.json())
                .then(data => {
                    if (data.acknowledged) {
                        e.target.reset();
                        toast.success('Order complete successfully.', { id: 'order-success' })
                    }
                })
        }
    }



    return (
        <div className='my-12'>
            <div className='mx-auto'>
                <div className="card card-side flex-col w-full md:flex-row bg-base-100 shadow-xl">
                    <figure className="w-full md:w-1/2">
                        <img className='w-48' src={image} alt="Movie" />
                    </figure>
                    <div className="card-body w-full md:w-1/2">
                        <h2 className="card-title">{name}</h2>
                        <p>{description}</p>
                        <p><span className='font-bold'>Price : $</span>{price}/piece</p>
                        <p><span className='font-bold'>Minimum Order : </span>{min_order}</p>
                        <p><span className='font-bold'>Available Quantity : </span>{available_quantity}</p>
                    </div>
                </div>

            </div>
            <div className='my-8'>
                <h3 className='text-5xl'>Interest In this tool? Click <span className='font-bold text-primary'>Place Order</span></h3>

                <form onSubmit={handlePlaceOrder}>
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input
                        name='name'
                        defaultValue={user?.displayName}
                        readOnly
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <label className="label"></label>

                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <input
                        defaultValue={user?.email}
                        readOnly
                        name='email'
                        type="email"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <label className="label"></label>

                    <label className="label">
                        <span className="label-text">Your Phone Number</span>
                    </label>
                    <input
                        required
                        name='phone'
                        type="number"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <label className="label">
                        <span class="label-text-alt text-red-600">{ }</span>;
                    </label>


                    <label className="label">
                        <span className="label-text">Your Address</span>
                    </label>
                    <textarea
                        required
                        name='address'
                        type="number"
                        placeholder="Type here"
                        className="textarea textarea-bordered w-full max-w-xs"
                    />
                    <label className="label">

                    </label>

                    <label className="label">
                        <span className="label-text">Minimum Order Quantity</span>
                    </label>
                    <input
                        name='minOrder'
                        required
                        defaultValue={min_order}
                        type="number"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <label className="label">
                        <span class="label-text-alt text-red-600">{ }</span>;
                    </label>


                    <input
                        type="submit"
                        className="input input-bordered w-full max-w-xs btn btn-accent btn-outline"
                        value='Place Order'
                    />
                </form>

            </div>

        </div >
    )
}

export default Purchase