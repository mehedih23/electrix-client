import React from 'react'

const PortfolioBanner = () => {
    return (
        <div className="hero min-h-fit my-8 bg-base-100">
            <div className="hero-content p-0 flex-col lg:flex-row-reverse">
                <div className='lg:w-1/2 text-center md:flex md:justify-center'>
                    <img src="https://i.ibb.co/HG9rR1P/my1.png" className="max-w-md rounded-lg" alt='Mehedi Hassan Barat' />
                </div>
                <div className='lg:w-1/2'>
                    <h1
                        data-aos="zoom-in-right"
                        data-aos-delay="200"
                        className="text-5xl font-bold text-accent"
                    >Mehedi Hassan Barat</h1>
                    <p
                        data-aos="zoom-in-right"
                        data-aos-delay="600"
                        className="py-6"
                    >Full Stack Developer with high level of experience in web designing and development, producting the quality work.</p>
                    <div
                        data-aos="zoom-in-right"
                        data-aos-delay="1000"
                    >
                        <button className="btn btn-outline btn-primary">Hire Me</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioBanner