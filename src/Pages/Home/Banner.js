import React from 'react'

const Banner = () => {
    return (
        <div class="hero min-h-screen" style={{ "backgroundImage": "url(https://html.modernwebtemplates.com/electrix/images/slide01.jpg)" }}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <p className='text-2xl text-center'>ELECTRIX MANUFACTURING</p>
                    <h1 class="mb-5 text-5xl"><span className='text-secondary font-bold'>COMMITED</span> <br /> TO SUPER QUALITY</h1>
                    <p class="mb-5">We won Many Industrial Awards and Got Many Certificates Since 2001-2016</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Banner