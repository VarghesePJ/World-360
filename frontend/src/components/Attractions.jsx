import React from 'react'
import NK from '../assets/img/NK.jpg'
import CK from '../assets/img/CK.jpg'
import EK from '../assets/img/EK.webp'
import WK from '../assets/img/WK.webp'
import SK from '../assets/img/SK.jpg'

const Attractions = () => {
    return (
        <>
            <div className='min-h-150 my-5 mx-5 md:mx-10 px-2 py-10 md:p-10 rounded-4xl bg-white '>
                <h2 className='text-5xl md:text-6xl font-bold text-center'>Attractions</h2>
                <p className='text-md md:text-xl mt-5 text-center'>Explore Kerala's backwaters, hills, beaches, and heritage!</p>
                <div className="attract">
                    <div className='icontainer'>
                        <img src={NK} alt="image" />
                        <p className='otext'>Meenmutty Waterfalls</p>
                        <p className='stext'>A breathtaking three-tiered waterfall </p>
                    </div>
                    <div className='icontainer'>
                        <img src={EK} alt="image" />
                        <p className='otext'>Silent Valley National Park</p>
                        <p className='stext'>Pristine rainforest & rare species</p>
                    </div>
                    <div className='icontainer'>
                        <img src={WK} alt="image" />
                        <p className='otext'>Fort Kochi</p>
                        <p className='stext'>Chinese fishing nets, colonial buildings, & street art</p>
                    </div>
                    <div className='icontainer'>
                        <img src={SK} alt="image" />
                        <p className='otext'>Varkala Cliff & Beach</p>
                        <p className='stext'>Stunning cliffside beach views</p>
                    </div>
                    <div className='icontainer'>
                        <img src={CK} alt="image" />
                        <p className='otext'>Athirappilly Waterfalls</p>
                        <p className='stext'>Kerala's "Niagara Falls"</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Attractions