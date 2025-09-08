import React from 'react'
import { CheckIcon, LucideToggleRight } from 'lucide-react'
import { PricingTable } from '@clerk/clerk-react'

const Subscription = () => {
  return (
    <div className='max-w-2xl mx-auto z-20 my-30'>
      <div className='text-center mt-16'>
        <h1 className='text-2xl sm:text-3xl md:text-3xl 2xl:text-5xl font-semibold mx-auto leading-[1.3]'>Choose Your Plan</h1>
        <p className='mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-xs text-gray-500'>Start for free and scale up as you grow. Find the perfect plan for <br />
          your content creation needs.
        </p>
      </div>

      <div className='mt-14 max-sm:mx-8'>
        <PricingTable />
      </div>

    </div>
  )
}

export default Subscription
