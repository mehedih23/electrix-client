import React from 'react'
import { Link } from 'react-router-dom'

const WhoWe = () => {
    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1 grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div className="card bg-base-100 shadow-xl shadow-green-500/50">
                        <figure className='p-4 hover:scale-90 duration-500'>
                            <img src="https://i.ibb.co/9YCr6zt/2.png" alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="text-center text-primary text-2xl font-semibold mt-[-20px]">Amelia Ava</h2>
                            <p className='font-bold text-center'>Founder</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl shadow-green-500/50">
                        <figure className='p-4 hover:scale-90 duration-500'>
                            <img src="https://i.ibb.co/kq8R5yn/1.png" alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="text-center text-primary text-2xl font-semibold mt-[-20px]">Benjamin Lucas</h2>
                            <p className='font-bold text-center'>Co-Founder</p>
                        </div>
                    </div>
                </div>
                <div className='flex-1'>
                    <p className='text-primary my-4'>WHO WE ARE</p>
                    <h1 className="text-3xl text-accent">We are a team of experienced workers
                        <br />
                        & who love creation</h1>
                    <p className="py-6">
                        We specialize in various forms of material creation, anything from eco-friendly production for service that engage with the right audience.
                    </p>

                    <Link to='/team' className="btn btn-primary rounded-none btn-outline">
                        Learn More <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default WhoWe