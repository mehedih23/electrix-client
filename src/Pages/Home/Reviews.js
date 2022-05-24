import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { ClipLoader } from 'react-spinners';
import auth from '../../firebase.init'

const Reviews = () => {
    const [user, loading] = useAuthState(auth);
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:1111/review')
            .then(response => response.json())
            .then(data => setReviews(data))
    }, []);


    if (loading) {
        return <div className='h-screen flex justify-center items-center'>
            <ClipLoader loading={loading} size={150} />
        </div>
    }

    return (
        <div className='my-12'>
            {/* heading */}
            <div className='text-center'>
                <h1 className='text-5xl text-accent'>Testimonials</h1>
            </div>
            <div div className="my-8" >
                <h2 className='text-4xl font-bold my-2'>Clients Always get </h2>
                <h2 className='text-4xl font-bold my-2 text-primary'>Excepted Products</h2>
                <h2 className='text-4xl font-bold my-2'>from us ... </h2>
            </div>

            <div className="carousel w-full">
                {
                    reviews.map((rev, index) => <div key={rev._id} id={`item${index + 1}`} className="carousel-item w-full">
                        <div className='w-3/4 m-auto flex flex-col justify-center items-center'>
                            {
                                user?.photoURL === null ? <>
                                    <div className="avatar placeholder my-4">
                                        <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
                                            <span className='text-3xl'>{rev.name.slice(0, 1)}</span>
                                        </div>
                                    </div>
                                </> : <>
                                    <div className="avatar my-6">
                                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={user?.photoURL} alt={user?.displayName} />
                                        </div>
                                    </div>
                                </>
                            }
                            <p className='text-xl mb-6'>{rev.name}</p>
                            <p className='text-center'>{rev.review}</p>
                            <p className='text-purple-600 font-bold my-4'>Ratings : {rev.rating} out of 5</p>
                        </div>
                    </div>)
                }
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                {
                    reviews.map((rev, index) => <a key={rev._id} href={`#item${index + 1}`} className="btn btn-xs">{index + 1}</a>)
                }
            </div>




        </div >
    )
}

export default Reviews;