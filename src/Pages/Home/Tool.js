import React from 'react'
import { useNavigate } from 'react-router-dom';


const Tool = ({ tool }) => {
    const navigate = useNavigate();
    const { name, image, description, price, min_order, available_quantity } = tool;

    return (
        <div class="card w-96 bg-base-100 shadow-2xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{description.length > 100 ? description.slice(0, 100) : description}...</p>
                <p className='font-bold'>Price : ${price}/piece</p>
                <p className='font-bold'>Min Order: {min_order} piece</p>
                <p className='font-bold'>Available : {available_quantity} piece</p>
                <div class="card-actions justify-end">
                    <button onClick={() => navigate('/purchase')} class="btn btn-primary">
                        Buy Now
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>

                    </button>
                </div>
            </div>
        </div>
    )
}

export default Tool