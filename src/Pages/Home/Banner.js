import React from 'react'

const Banner = () => {
    return (
        <div class="hero min-h-screen" style={{ "backgroundImage": "url(https://html.modernwebtemplates.com/electrix/images/slide01.jpg)" }}>
            <div class="hero-overlay bg-opacity-50"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
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
                        class="mb-5 text-5xl"
                    >
                        <span className='text-secondary font-bold'>COMMITED</span>
                        <br />
                        <span>TO SUPER QUALITY</span>
                    </div>
                    <p
                        data-aos="fade-down"
                        data-aos-duration="600"
                        data-aos-delay="1000"
                        class="mb-5"
                    >We won Many Industrial Awards and Got Many Certificates Since 2001-2016</p>
                    <div
                        data-aos="fade-down"
                        data-aos-duration="400"
                        data-aos-delay="1200"
                    >
                        <button
                            class="btn btn-primary"
                        >Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner