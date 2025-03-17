import React from 'react'

const Featured = () => {
    return (
        <>
            <div className='min-h-fit m-5 p-10 rounded-4xl bg-white '>
                <h1 className='text-6xl font-bold text-center'>Explore!</h1>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10'>
                    <div className='explore_card content-center'>
                        <h1 className='text-3xl text-center font-bold text-white'>Places</h1>
                    </div>
                    <div className='explore_card content-center'>
                        <h1 className='text-3xl text-center font-bold text-white'>Places</h1>
                    </div>
                    <div className='explore_card content-center'>
                        <h1 className='text-3xl text-center font-bold text-white'>Places</h1>
                    </div>
                    <div className='explore_card content-center'>
                        <h1 className='text-3xl text-center font-bold text-white'>Places</h1>
                    </div>
                </div>
                <p className='text-center text-xl font-bold mt-10'>View More</p>
            </div>
        </>
    )
}

export default Featured