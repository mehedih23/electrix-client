import React from 'react'

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ "backgroundImage": "url(https://html.modernwebtemplates.com/electrix/images/slide01.jpg)" }}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <p
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                        className='text-2xl text-center'
                    >ELECTRIX MANUFACTURING</p>
                    <div
                        data-aos="fade-down"
                        data-aos-duration="800"
                        data-aos-delay="600"
                        className="mb-5 text-5xl"
                    >
                        <span className='text-secondary font-bold'>COMMITED</span>
                        <br />
                        <span>TO SUPER QUALITY</span>
                    </div>
                    <p
                        data-aos="fade-down"
                        data-aos-duration="600"
                        data-aos-delay="1000"
                        className="mb-5"
                    >We won Many Industrial Awards and Got Many Certificates Since 2001-2016</p>
                    <div
                        data-aos="fade-down"
                        data-aos-duration="400"
                        data-aos-delay="1200"
                    >
                        <button
                            className="btn btn-primary shadow-lg shadow-green-400"
                        >Get Started
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner