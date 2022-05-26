import React from 'react'
// import { Link } from 'react-router-dom'
import GMap from './GMap'

const Address = () => {
    return (
        <div className='h-fit my-20'>
            <h3 className='text-primary text-3xl my-4 text-center'>Contact Us</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10'>

                <div className="card bg-base-100 shadow-lg shadow-green-500/50">
                    <div className="card-body">
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-16 h-16' viewBox="0 0 384 512">
                            <path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" />
                        </svg>
                        <h2 className="card-title text-3xl my-4">Address</h2>
                        <address className='text-xl mb-8'>
                            Sobuj Para <br />
                            Nilphamari Sadar, 5301,<br />
                            Nilphamari Sadar, Nilphamari,<br />
                            Rangpur, Bangladesh<br />
                        </address>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-lg shadow-green-500/50">
                    <div>
                        <GMap></GMap>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Address
