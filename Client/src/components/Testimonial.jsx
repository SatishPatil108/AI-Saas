import React, { useState } from 'react'
import { dummyTestimonialData, assets } from '../assets/assets.js';

const Testimonial = () => {

    return (
        <div className='py-3 px-4 sm:px-20 xl:px-32'>
            <div className='text-center mt-16'>
                <h1 className='text-2xl sm:text-3xl md:text-3xl 2xl:text-5xl font-semibold mx-auto leading-[1.3]'>Loved by Creators</h1>
                <p className='mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-xs text-gray-600'>Don't just take our word for it. Here's what our <br /> users are saying.  </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 mb-16 mt-8 gap-6 px-4 mx-4'>
                {
                    dummyTestimonialData.map((testimonial, index) => (
                        <div key={index} className='group cursor-pointer py-2 px-4 rounded-lg flex flex-col' style={{
                            boxShadow: "0 0 5px 2px rgba(0,0,0,0.1)"
                        }} >
                            <div className='flex items-center gap-1'>
                                {
                                    Array(5).fill(0).map((_, index) => (
                                        <img key={index} src = {index < testimonial.rating ? assets.star_icon : assets.star_dull_icon} alt="star" className=' inline-block mx-0.5' />
                                    ))
                                }
                            </div>
                            <p className='mt-4 text-sm font-medium  text-gray-500'>{testimonial.content.slice(0, 140)}...</p>
                            <hr className='text-gray-300 mt-4' />
                            <div className='flex items-center mt-6 gap-3 mb-0'>
                                <img src={testimonial.image} alt="" className='md:w-11 w-9' />
                                <div>
                                    <h1 className='text-1xl md:text-xl'>{testimonial.name}</h1>
                                    <p className='text-sm font-medium  text-gray-500'>{testimonial.title}</p>
                                </div>
                            </div>
                        </div>

                    ))
                }

            </div>

        </div>
    )
}

export default Testimonial
