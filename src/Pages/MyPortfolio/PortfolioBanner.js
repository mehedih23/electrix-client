import React from 'react'

const PortfolioBanner = () => {
    return (
        <div class="hero min-h-fit my-8 bg-base-100">
            <div class="hero-content p-0 flex-col lg:flex-row-reverse">
                <div className='lg:w-1/2 text-center md:flex md:justify-center'>
                    <img src="https://i.ibb.co/HG9rR1P/my1.png" class="max-w-md rounded-lg" alt='Mehedi Hassan Barat' />
                </div>
                <div className='lg:w-1/2'>
                    <h1
                        data-aos="zoom-in-right"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                        class="text-5xl font-bold"
                    >Mehedi Hassan Barat</h1>
                    <p
                        data-aos="zoom-in-right"
                        data-aos-duration="700"
                        data-aos-delay="600"
                        class="py-6"
                    >Full Stack Developer with high level of experience in web designing and development, producting the quality work.</p>
                    <div
                        data-aos="zoom-in-right"
                        data-aos-duration="400"
                        data-aos-delay="1000"
                    >
                        <button class="btn">Hire Me</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioBanner