import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const CheckoutForm = ({ item }) => {
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const { _id, total, email, customerName, productName } = item;

    useEffect(() => {
        fetch('https://limitless-headland-17774.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('Access-Token')}`
            },
            body: JSON.stringify({ price: total })
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
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            })
    }, [navigate, total])


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) return;

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error?.message);
        } else {
            setCardError(" ");
        }

        // confirm card error //
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: customerName,
                        email: email,
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message);
        } else {
            setSuccess('Congrats! Your payment is done.')
            setTransactionId(paymentIntent.id)
            setCardError(" ");

            const payment = {
                orderId: _id,
                OrderName: productName,
                customerName: customerName,
                email: email,
                transactionId: paymentIntent.id
            }

            fetch(`https://limitless-headland-17774.herokuapp.com/order/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(response => response.json())
                .then(data => console.log(data))
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className='btn btn-success btn-sm mt-6' disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {cardError && <p className='text-red-600 mt-5'>{cardError}</p>}
            {success && <>
                <p className='text-green-600 mt-5'>{success}</p>
                <p className='text-green-600 mt-5'>TransactionId :<small className='text-orange-600'> {transactionId}</small></p>
            </>}
        </div>
    )
}

export default CheckoutForm