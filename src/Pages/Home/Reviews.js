import React from 'react'

const Reviews = () => {
    return (
        <div className='my-12'>
            {/* heading */}
            <div className='text-center'>
                <h1 className='text-5xl text-accent'>Testimonials</h1>
            </div>
            <div div className="my-8" >
                <h2 className='text-4xl font-bold my-2'>Clients Always get </h2>
                <h2 className='text-4xl font-bold my-2 text-primary'>Excepted Products</h2>
                <h2 className='text-4xl font-bold my-2'>from us ... </h2>
            </div>

            <div class="carousel w-full">
                <div id="item1" class="carousel-item w-full">
                    <div className='w-3/4 m-auto flex flex-col justify-center items-center'>
                        <div class="avatar my-6">
                            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://api.lorem.space/image/face?hash=3274" alt='h' />
                            </div>
                        </div>
                        <p className='text-center'>A drill is a type of electrical tool that has a spinning tip. It can be used for many different jobs depending on the attachment. If a drill bit is attached, the drill can be used to make holes in material. A driver bit can also be attached, allowing the drill to put screws into the desired material</p>
                    </div>
                </div>
                <div id="item2" class="carousel-item w-full">
                    <div className='w-3/4 m-auto flex flex-col justify-center items-center'>
                        <div class="avatar my-6">
                            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://api.lorem.space/image/face?hash=3374" alt='h' />
                            </div>
                        </div>
                        <p className='text-center'>A screwdriver is a tool, manual or powered, used for driving screws. A typical simple screwdriver has a handle and a shaft, ending in a tip the user puts into the screw head before turning the handle.</p>
                    </div>
                </div>
                <div id="item3" class="carousel-item w-full">
                    <div className='w-3/4 m-auto flex flex-col justify-center items-center'>
                        <div class="avatar my-6">
                            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://api.lorem.space/image/face?hash=3474" alt='h' />
                            </div>
                        </div>
                        <p className='text-center'>A rivet gun, also known as a rivet hammer or a pneumatic hammer, is a type of tool used to drive rivets. The rivet gun is used on rivet's factory head, and a bucking bar is used to support the tail of the rivet. The energy from the hammer in the rivet gun drives the work and the rivet against the bucking bar.</p>
                    </div>
                </div>
                <div id="item4" class="carousel-item w-full">
                    <div className='w-3/4 m-auto flex flex-col justify-center items-center'>
                        <div class="avatar my-6">
                            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://api.lorem.space/image/face?hash=3574" alt='h' />
                            </div>
                        </div>
                        <p className='text-center'>A scale or balance is a device used to measure weight or mass. These are also known as mass scales, weight scales, mass balances, and weight balances. The traditional scale consists of two plates or bowls suspended at equal distances from a fulcrum.</p>
                    </div>
                </div>
                <div id="item5" class="carousel-item w-full">
                    <div className='w-3/4 m-auto flex flex-col justify-center items-center'>
                        <div class="avatar my-6">
                            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://api.lorem.space/image/face?hash=3674" alt='h' />
                            </div>
                        </div>
                        <p className='text-center'>sander, portable power tool used for smoothing, polishing, or cleaning a surface, as of wood, plastic, or metal. Sanders are also used to roughen surfaces in preparation for finishing. There are three main types of power sanders: the disk sander, the belt sander, and the orbital sander.</p>
                    </div>
                </div>
                <div id="item6" class="carousel-item w-full">
                    <div className='w-3/4 m-auto flex flex-col justify-center items-center'>
                        <div class="avatar my-6">
                            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://api.lorem.space/image/face?hash=3774" alt='h' />
                            </div>
                        </div>
                        <p className='text-center'>A Hose Reel is a cylindrical spindle made of either metal, fiberglass, or plastic and is used for storing a hose. The most common styles of hose reels are spring driven, hand crank, or motor driven. Hose reels are categorized by the diameter and length of the hose they hold, the pressure rating and the rewind method.</p>
                    </div>
                </div>
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
                <a href="#item1" class="btn btn-xs">1</a>
                <a href="#item2" class="btn btn-xs">2</a>
                <a href="#item3" class="btn btn-xs">3</a>
                <a href="#item4" class="btn btn-xs">4</a>
                <a href="#item5" class="btn btn-xs">5</a>
                <a href="#item6" class="btn btn-xs">6</a>
            </div>




        </div>
    )
}

export default Reviews