import React from 'react'
import { assets } from '../assets/assets.js';
import { SquarePen, Hash, Image, Eraser, Scissors, FileText, LucideHome, UserIcon, LucideArrowRightFromLine } from 'lucide-react'

const Dashboard = () => {
  return (
    <div className='mt-22'>
      <div className='w-80 inline-block h-full gap-8' style={{ backgroundColor: "#f0f4f9" }}>
        <div className='m-auto'>
          <img src={assets.profile_img_1} alt="" className='md:w-11 w-10 m-auto' />
          <p className='text-1xl font-bold text-center py-2'>William Mark</p>
        </div>

        <div className='px-12'>
          <table className='flex flex-col gap-4'>
            <tr>
              <td>
                <LucideHome className='font-bold' />
              </td>
              <td>
                <p className='text-1xl text-gray-500 font-bold ps-4'> Dashboard</p>
              </td>
            </tr>
            <tr>
              <td>
                <SquarePen className='font-bold' />
              </td>
              <td>
                <p className='text-1xl text-gray-500 font-bold ps-4'>Write Article</p>
              </td>
            </tr>
            <tr>
              <td>
                <Hash className='font-bold' />
              </td>
              <td>
                <p className='text-1xl text-gray-500 font-bold ps-4'>Blog Titles</p>
              </td>
            </tr>
            <tr>
              <td>
                <Image className='font-bold' />
              </td>
              <td>
                <p className='text-1xl text-gray-500 font-bold ps-4'>Generate Images</p>
              </td>
            </tr>
            <tr>
              <td>
                <Eraser className='font-bold' />
              </td>
              <td>
                <p className='text-1xl text-gray-500 font-bold ps-4'>Remove Background</p>
              </td>
            </tr>
            <tr>
              <td>
                <Scissors className='font-bold' />
              </td>
              <td>
                <p className='text-1xl text-gray-500 font-bold ps-4'>Remove Object</p>
              </td>
            </tr>
            <tr>
              <td>
                <FileText className='font-bold' />
              </td>
              <td>
                <p className='text-1xl text-gray-500 font-bold ps-4'>Review Resume</p>
              </td>
            </tr>
          </table>
        </div>

        <hr className='text-gray-300 mt-12' />
        <div className='mx-auto  flex items-center gap-4 mb-2 mt-8 px-8 py-2'>
          <UserIcon className='bg-fuchsia-400 text-white rounded-full w-10 h-10 p-1' />
          <span>
            <h1 className='font-bold'>William Mark</h1>
            <p>Premium Plan</p>
          </span>
          <LucideArrowRightFromLine className=' w-8 h-8 text-gray-500' />
        </div>
      </div>
    </div>


  )
}

export default Dashboard