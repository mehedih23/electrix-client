import React from 'react'

const Work = () => {
    return (
        <div className='my-8'>
            <h2 className='text-4xl my-2'>CHECK MY LATEST WORK</h2>
            <p className='text-xl my-2'>Here are a few design projects I've worked on recently.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img src="https://i.ibb.co/rvdQRZ4/Screenshot-2022-05-25-224320.png" alt="Shoes" />
                    </figure>
                    <div className="card-body text center">
                        <a href='https://muscle-maniacs.web.app/' alt='muscle-maniacs' className='btn btn-primary btn-outline'>Live Preview</a>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img src="https://i.ibb.co/ynjmsL1/Screenshot-2022-05-25-224504.png" alt="Shoes" />
                    </figure>
                    <div className="card-body text center">
                        <a href='https://pocket-gadget.web.app/' alt='pocket-gadget' className='btn btn-primary btn-outline'>Live Preview</a>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img src="https://i.ibb.co/S6PzsGq/Screenshot-2022-05-25-224127.png" alt="Shoes" />
                    </figure>
                    <div className="card-body text center">
                        <a href='https://review-studio.netlify.app/' alt='review-studio' className='btn btn-primary btn-outline'>Live Preview</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work