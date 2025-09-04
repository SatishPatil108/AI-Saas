import React from 'react'
import { CheckIcon } from 'lucide-react'

const Subscription = () => {
  return (
    <div className='py-3 px-4 mt-16'>
      <div className='text-center'>
        <h1 className='text-2xl sm:text-3xl md:text-3xl 2xl:text-5xl font-semibold mx-auto leading-[1.3]'>Choose Your Plan</h1>
        <p className='mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-xs text-gray-500'>Start for free and scale up as you grow. Find the perfect plan for <br />
          your content creation needs.
        </p>
      </div>

      <div className='flex justify-center mt-14 mb-14 gap-8 flex-col lg:flex-row'>
        <div className='w-80 rounded-lg  bg-gray-100 m-auto lg:m-0' style={{
          boxShadow: "0 0 5px 2px rgba(0,0,0,0.2)"
        }} >
          <div className='mb-2 bg-gray-100'>
            <h1 className='font-semibold px-4 text-2xl py-2'>Free</h1>
            <h1 className='font-semibold px-4 text-2xl py-2'>$0</h1>
            <p className='px-4 text-gray-500 py-2'>Always free</p>
          </div>
          <div className='bg-white h-55 p-4' style={{borderTop:" 1px solid rgba(0,0,0,0.2)",borderBottom:" 1px solid rgba(0,0,0,0.2)" }}>
            <p> <CheckIcon className='inline-block text-gray-400 me-2' />Title Generation</p>
            <p> <CheckIcon className='inline-block text-gray-400 me-2' />Article Generation</p>
          </div>
          <div className='mb-2 bg-gray-100 h-17 text-center flex'>
            <button className='bg-black rounded-lg py-1 min-w-2xs text-white m-auto'>Subscribe</button>
          </div>
        </div>

        <div className='w-80 rounded-lg  bg-gray-100 m-auto lg:m-0' style={{
          boxShadow: "0 0 5px 2px rgba(0,0,0,0.2)"
        }} >
          <div className='mb-2 bg-gray-100'>
            <h1 className='font-semibold px-4 text-2xl py-2'>Premium</h1>
            <h1 className='font-semibold px-4 text-2xl py-2'>$16<sup className='text-gray-400 text-sm'>/month</sup></h1>
            <p className='px-4 text-gray-500 py-2'>Always free</p>
          </div>
          <div className='bg-white h-55 p-4' style={{borderTop:" 1px solid rgba(0,0,0,0.2)",borderBottom:" 1px solid rgba(0,0,0,0.2)" }}>
            <p> <CheckIcon className='inline-block text-gray-400 me-2' />Title Generation</p>
            <p> <CheckIcon className='inline-block text-gray-400 me-2' />Article Generation</p>
            <p> <CheckIcon className='inline-block text-gray-400 me-2' />Article Generation</p>
            <p> <CheckIcon className='inline-block text-gray-400 me-2' />Generate Images</p>
            <p> <CheckIcon className='inline-block text-gray-400 me-2' />Remove Background</p>
            <p> <CheckIcon className='inline-block text-gray-400 me-2' />Remove Object</p>
            <p> <CheckIcon className='inline-block text-gray-400 me-2' />Resume Review</p>
          </div>
          <div className='mb-2 bg-gray-100 flex h-17'>
            <button className='bg-black rounded-lg py-1 w-2xs m-auto  text-white'>Subscribe</button>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Subscription
