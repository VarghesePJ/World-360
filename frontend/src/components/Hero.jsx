import React from 'react'
import Hero_img from '../assets/img/hero.svg'

const Hero = () => {
    return (
        <>
            <div className="relative bg-white m-5 p-10 rounded-4xl min-h-[600px] flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${Hero_img})` }}>
                <h1 className="text-6xl font-bold">Discover the Best of Your City</h1>
                <h3 className="text-2xl my-5">Explore top restaurants, attractions, and hidden gems with our local guide.</h3>
                <button className="px-6 py-3 text-2xl text-white bg-black border-4 border-black rounded-4xl transition-all duration-300 hover:bg-white hover:text-black">
                    Start Exploring
                </button>
            </div>

        </>
    )
}

export default Hero