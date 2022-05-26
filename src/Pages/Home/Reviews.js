import React, { useEffect, useState } from 'react'


const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://limitless-headland-17774.herokuapp.com/review')
            .then(response => response.json())
            .then(data => setReviews(data))
    }, []);

    return (
        <div className='my-12'>
            <div className='text-center'>
                <h1 className='text-5xl text-accent'>Testimonials</h1>
            </div>
            <div div className="my-8" >
                <h2 className='text-4xl font-bold my-2'>Clients Always get </h2>
                <h2 className='text-4xl font-bold my-2 text-primary'>Excepted Products</h2>
                <h2 className='text-4xl font-bold my-2'>from us ... </h2>
            </div>

            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5'>
                {
                    reviews.map(review => <div
                        key={review._id}
                        className="card bg-base-100 shadow-xl shadow-green-500/50">
                        <div className="card-body">
                            <h2 className="card-title">
                                <div className="avatar placeholder mr-2">
                                    <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                                        <span>{review.name.slice(0, 1).toUpperCase()}</span>
                                    </div>
                                </div>
                                {review.name}
                            </h2>
                            <p>{review.review}</p>
                            <p className='font-bold flex'>Ratings: {review.rating}<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 text-rose-500" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            </p>
                        </div>
                    </div>)
                }
            </div>

        </div >
    )
}

export default Reviews;