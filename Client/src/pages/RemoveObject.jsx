import React, { useState } from 'react'
import { Sparkles, Scissors } from 'lucide-react'

const RemoveObject = () => {

  const [selectedFile, setSelectedFile] = useState('');
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.prevantDefault();
  }

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  }

  return (
    <div className='h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700'>
      {/* prompt Column */}
      <form onSubmit={handleSubmit} className='p-4  w-110 bg-white  rounded-lg border border-gray-200'>
        <div className='flex items-center gap-3'>
          <Sparkles className='w-5 text-[#4A7AFF]' />
          <h2 className='font-semibold text-xl'>Object Removal</h2>
        </div>

        <p className='text-slate-600 text-lg mt-6 sm:max-w-full'>Upload Image</p>
        <input onChange={()=>handleFileChange(e)}  type="file" accept='image/*' className='border border-gray-300 rounded-md w-full p-2 px-3 mt-2 text-sm outline-none cursor-pointer' required/>
        <p className='text-slate-400 text-sm mt-2 sm:max-w-full'>Supports JPG, PNG, and other image formats</p>

        <br />
        <p className='text-slate-700 text-sm mt-2 sm:max-w-full'>Describe object to remove</p>
        <textarea onChange={(e) => setInput(e.target.value)} value={input} type="text" className='h-22 border border-gray-300 rounded-md w-full px-3 mt-2 text-sm outline-none'
          placeholder='eg., car in background, tree from the image..' required />
        <p className='text-slate-400 text-xs sm:max-w-full'>Be specific about what you want to remove.</p>


        <button className='w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#417DF6] to-[#8E37EB]
           text-white rounded-lg cursor-pointer py-2 px-4 mt-6'>
          <Scissors className='w-5' />
          Remove Background</button>
      </form>

      {/* response column */}
      <div className='w-full max-w-lg min-h-96 p-4 flex flex-col  bg-white  rounded-lg border border-gray-200 h-110'>
        <div className='flex items-center gap-3'>
          <Scissors className='text-[#4A7AFF] w-5 h-5' />
          <h1 className='text-xl font-semibold'>Processed Image</h1>
        </div>

        <div className='flex-1 flex justify-center items-center'>
          <div className='flex flex-col text-sm text-gray-400 gap-5 items-center'>
            <Scissors className='w-9 h-9' />
            <p>Upload an image and describe what to remove</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default RemoveObject