import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div className='h-fit my-20'>
            <h3 className='text-primary text-3xl my-4 text-center'>Contact Us</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10'>

                <div class="card bg-base-100 shadow-xl">
                    <div class="card-body">
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-16 h-16' viewBox="0 0 384 512">
                            <path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" />
                        </svg>
                        <h2 class="card-title text-3xl my-4">Address</h2>
                        <address className='text-xl mb-8'>
                            Sobuj Para <br />
                            Nilphamari Sadar, 5301,<br />
                            Nilphamari Sadar, Nilphamari,<br />
                            Rangpur, Bangladesh<br />
                        </address>
                    </div>
                </div>

                <div class="card bg-base-100 shadow-xl ">
                    <div class="card-body">
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-16 h-16' viewBox="0 0 512 512">
                            <path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z" />
                        </svg>
                        <h2 class="card-title text-4xl my-4">Email Us</h2>
                        <Link className='font-bold hover:underline text-primary' to="/">electrix20021@gmail.com</Link>
                        <Link className='font-bold hover:underline text-primary' to="/">electrix20022@gmail.com</Link>
                        <Link className='font-bold hover:underline text-primary' to="/">electrix20023@gmail.com</Link>
                        <Link className='font-bold hover:underline text-primary' to="/">electrix20024@gmail.com</Link>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Contact