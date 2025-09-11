import React, { useState } from 'react'
import { Image, Sparkles } from 'lucide-react'

const GenerateImages = () => {
  const styleCategory = ['Realistic', 'Ghibli', 'Anime style', 'Cartoon style', 'Fantasy style', 'Realistic style', '3D style', 'Potrait style'];

  const [imageStyle, setImageStyle] = useState('Realistic')
  const [input, setInput] = useState('');
  const [publish, setPublish] = useState(false);

  const handleSubmit = (e) => {
    e.prevantDefault();
  }


  return (
    <div className='h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700'>

      {/* promat column */}
      <form onSubmit={handleSubmit} className='p-4 w-110 bg-white  rounded-lg border border-gray-200'>
        <div className='flex items-center gap-3'>
          <Sparkles className='w-6 text-[#00AD25] mt-0.5' />
          <h2 className='font-semibold text-xl'>AI Image Generator</h2>
        </div>

        <p className='font-semibold text-sm mt-6 sm:max-w-full'>Describe Your Image</p>
        <textarea onChange={(e) => setInput(e.target.value)} value={input} type="text" className='h-22 border border-gray-300 rounded-md w-full px-3 mt-2 text-sm outline-none'
          placeholder='Describe what you want too see in the image..' required />

        <p className='font-medium mt-2 text-sm'>Style</p>

        <div className='grid grid-cols-3  text-center mt-3 gap-3'>
          {
            styleCategory.map((ele, index) => {
              return <span onClick={() => setImageStyle(ele)} key={index}
                className={`border text-xs px-4 py-1 rounded-xl min-w-fit cursor-pointer items-center
                ${imageStyle === ele ? 'bg-green-50 text-green-500' : 'text-gray-500 border-gray-300'}`}>{ele}</span>
            })
          }
        </div>

        {/* toggle button */}
        <div className='my-6 flex gap-2 items-center'>
          <label className='relative cursor-pointer'>
            <input type="checkbox" onChange={(e) => setPublish(e.target.checked)} checked={publish} className='sr-only peer' required/>
            <div className='w-9 h-5 bg-slate-300 rounded-full peer-checked:bg-green-500 transition'></div>

            <span className='absolute left-1 top-1 w-3 h-3  bg-white rounded-full transition peer-checked:translate-x-4'></span>
          </label>
          <p className='text-sm'>Make this image Public</p>
        </div>

        <button className='w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#00AD25] to-[#04FF50]
           text-white rounded-lg cursor-pointer py-2 px-4 mt-6'>
          <Image className='w-5' />
          Generate Image</button>
      </form>

      {/* response column */}
      <div className='w-full max-w-lg min-h-96 p-4 flex flex-col  bg-white  rounded-lg border border-gray-200 h-96'>
        <div className='flex items-center gap-3'>
          <Image className='text-[#00AD25] w-5 h-5' />
          <h1 className='text-xl font-semibold'>Generated Image</h1>
        </div>

        <div className='flex-1 flex justify-center items-center'>
          <div className='flex flex-col text-sm text-gray-400 gap-5 items-center'>
            <Image className='w-9 h-9' />
            <p>Describe an image and click "Generate Image" to get started</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GenerateImages