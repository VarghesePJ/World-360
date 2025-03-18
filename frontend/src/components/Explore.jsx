import React from 'react'

const Featured = () => {
    return (
        <>
            <div className='min-h-fit my-5 mx-10 p-10 rounded-4xl bg-white '>
                <h1 className='text-6xl font-bold text-center'>Explore!</h1>
                <p className='text-xl mt-5 text-center underline'>Discover Kerala's beauty—lush greens, serene backwaters, and rich culture!</p>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-10'>
                    <div className='explore_card md:col-span-3 content-center'>
                        <h1 className='text-3xl text-center font-bold text-white'>North Kerala</h1>
                    </div>
                    <div className='explore_card content-center'>
                        <h1 className='text-3xl text-center font-bold text-white'>Western Kerala</h1>
                    </div>
                    <div className='explore_card content-center'>
                        <h1 className='text-3xl text-center font-bold text-white'>Central Kerala</h1>
                    </div>
                    <div className='explore_card content-center'>
                        <h1 className='text-3xl text-center font-bold text-white'>Eastern Kerala</h1>
                    </div>
                    <div className='explore_card md:col-span-3 content-center'>
                        <h1 className='text-3xl text-center font-bold text-white'>South Kerala</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Featured