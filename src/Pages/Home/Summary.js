import React from 'react'

const Summary = () => {
    return (
        <div className='my-28'>
            <h1 className='text-5xl text-center text-accent'>Millions Clients Trust Us</h1>
            <p className='uppercase text-center my-3 text-2xl text-primary'>Try to understand users expectation</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10'>
                <div className="card md:max-w-md lg:max-w-lg bg-base-100 shadow-xl shadow-green-500/50">
                    <div className="card-body text-center">
                        <h2 className='text-2xl'>Supply In</h2>
                        <p className='flex justify-center items-center text-3xl'>150+ <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-6 ml-2' viewBox="0 0 512 512">
                            <path d="M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z" />
                        </svg></p>
                        <p className='text-4xl text-accent'>Countries</p>
                    </div>
                </div>

                <div className="card md:max-w-md lg:max-w-lg bg-base-100 shadow-xl shadow-green-500/50">
                    <div className="card-body text-center">
                        <h2 className='text-2xl'>Clients</h2>
                        <p className='flex justify-center items-center text-3xl'>370K+
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-6 ml-2' viewBox="0 0 640 512"><path d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192z" /></svg>
                        </p>
                        <p className='text-4xl text-accent'>Worldwide</p>
                    </div>
                </div>

                <div className="card md:max-w-md lg:max-w-lg bg-base-100 shadow-xl shadow-green-500/50">
                    <div className="card-body text-center">
                        <h2 className='text-2xl'>Orders</h2>
                        <p className='flex justify-center items-center text-3xl'>1.2M
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-6 ml-2' viewBox="0 0 384 512">
                                <path d="M336 64h-53.88C268.9 26.8 233.7 0 192 0S115.1 26.8 101.9 64H48C21.5 64 0 85.48 0 112v352C0 490.5 21.5 512 48 512h288c26.5 0 48-21.48 48-48v-352C384 85.48 362.5 64 336 64zM192 64c17.67 0 32 14.33 32 32s-14.33 32-32 32S160 113.7 160 96S174.3 64 192 64zM282.9 262.8l-88 112c-4.047 5.156-10.02 8.438-16.53 9.062C177.6 383.1 176.8 384 176 384c-5.703 0-11.25-2.031-15.62-5.781l-56-48c-10.06-8.625-11.22-23.78-2.594-33.84c8.609-10.06 23.77-11.22 33.84-2.594l36.98 31.69l72.52-92.28c8.188-10.44 23.3-12.22 33.7-4.062C289.3 237.3 291.1 252.4 282.9 262.8z" /></svg>
                        </p>
                        <p className='text-4xl text-accent'>Completed</p>
                    </div>
                </div>

                <div className="card md:max-w-md lg:max-w-lg bg-base-100 shadow-xl shadow-green-500/50">
                    <div className="card-body text-center">
                        <h2 className='text-2xl'>Position In</h2>
                        <p className='flex justify-center items-center text-3xl'>Top-10
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-6 ml-2' viewBox="0 0 384 512"><path d="M288 358.3c13.98-8.088 17.53-30.04 28.88-41.39c11.35-11.35 33.3-14.88 41.39-28.87c7.98-13.79 .1658-34.54 4.373-50.29C366.7 222.5 383.1 208.5 383.1 192c0-16.5-17.27-30.52-21.34-45.73c-4.207-15.75 3.612-36.5-4.365-50.29c-8.086-13.98-30.03-17.52-41.38-28.87c-11.35-11.35-14.89-33.3-28.87-41.39c-13.79-7.979-34.54-.1637-50.29-4.375C222.5 17.27 208.5 0 192 0C175.5 0 161.5 17.27 146.3 21.34C130.5 25.54 109.8 17.73 95.98 25.7C82 33.79 78.46 55.74 67.11 67.08C55.77 78.43 33.81 81.97 25.72 95.95C17.74 109.7 25.56 130.5 21.35 146.2C17.27 161.5 .0008 175.5 .0008 192c0 16.5 17.27 30.52 21.34 45.73c4.207 15.75-3.615 36.5 4.361 50.29C33.8 302 55.74 305.5 67.08 316.9c11.35 11.35 14.89 33.3 28.88 41.4c13.79 7.979 34.53 .1582 50.28 4.369C161.5 366.7 175.5 384 192 384c16.5 0 30.52-17.27 45.74-21.34C253.5 358.5 274.2 366.3 288 358.3zM112 192c0-44.27 35.81-80 80-80s80 35.73 80 80c0 44.17-35.81 80-80 80S112 236.2 112 192zM1.719 433.2c-3.25 8.188-1.781 17.48 3.875 24.25c5.656 6.75 14.53 9.898 23.12 8.148l45.19-9.035l21.43 42.27C99.46 507 107.6 512 116.7 512c.3438 0 .6641-.0117 1.008-.0273c9.5-.375 17.65-6.082 21.24-14.88l33.58-82.08c-53.71-4.639-102-28.12-138.2-63.95L1.719 433.2zM349.6 351.1c-36.15 35.83-84.45 59.31-138.2 63.95l33.58 82.08c3.594 8.797 11.74 14.5 21.24 14.88C266.6 511.1 266.1 512 267.3 512c9.094 0 17.23-4.973 21.35-13.14l21.43-42.28l45.19 9.035c8.594 1.75 17.47-1.398 23.12-8.148c5.656-6.766 7.125-16.06 3.875-24.25L349.6 351.1z" /></svg>
                        </p>
                        <p className='text-4xl text-accent'>Brands</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary