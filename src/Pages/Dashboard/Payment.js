import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import { ClipLoader } from 'react-spinners';
import auth from '../../firebase.init';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L0dEWCZgoTM5Tayhs4p1lO2REirHqdBn34Pp0fPfvRzKZgv6ZnfqcGGGJ9l0iaigflrjz4TXdy8nEdsGufjPyTw008RZYfrLE');

const Payment = () => {
    const { id } = useParams();
    const [user, loading] = useAuthState(auth);


    const { isLoading, error, data: item } = useQuery(['payment', id], () =>
        fetch(`http://localhost:1111/order/${id}`).then(res =>
            res.json()
        )
    )

    if (error) return 'An error has occurred: ' + error.message;

    // loadings //
    if (loading || isLoading) {
        return <div className='h-screen flex justify-center items-center'>
            <ClipLoader loading={loading || isLoading} size={150} />
        </div>
    }



    return (
        <div className='p-8'>
            <div class="card w-96 bg-base-100 shadow-xl shadow-green-400/50 my-4">
                <div class="card-body">
                    <h2 class="card-title">Hello <span className='text-accent'>{user?.displayName}</span></h2>
                    <p className='text-2xl'>You Have Ordered <span className='font-bold text-accent'>{item.productName}</span></p>
                    <p className='text-xl'>Quantity : <span className='font-bold text-accent'>{item.orderQuantity} piece</span></p>
                    <p className='text-xl'>Total Price : <span className='font-bold text-accent'>${item.total}</span></p>
                </div>
            </div>

            {/* payment */}
            <div class="card w-96 bg-base-100 shadow-xl shadow-green-400/50 my-4">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm item={item} />
                    </Elements>
                </div>
            </div>
        </div>
    )
}

export default Payment