import React, { useState } from 'react'
import { Sparkles, Hash } from 'lucide-react'

const BlogTitles = () => {

  const blogCategory = ['General', 'Technology', 'Business', 'Health', 'Lifestyle', 'Education', 'Travel', 'Food'];
  const [selectdCategory, setSelectedCategory] = useState('General');
  const [input, setInput] = useState('');


  const handleSubmit = async (ele) => {
    ele.prevantDefault();
  }

  return (
    <div className='h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700'>

      {/* promat column */}
      <form onSubmit={handleSubmit} className='p-4  w-110 bg-white  rounded-lg border border-gray-200'>
        <div className='flex items-center gap-3'>
          <Sparkles className='w-6 text-[#8E37EB] mt-0.5' />
          <h2 className='font-semibold text-xl'>AI Title Generator</h2>
        </div>

        <p className='font-semibold text-sm mt-6'>Keyword</p>
        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" className='border border-gray-300 rounded-md w-full p-2 px-3 mt-2 text-sm outline-none'
          placeholder=' The future of article intelligence' required />

        <p className='font-medium mt-4 text-sm'>Category</p>

        <div className='grid grid-cols-3 gap-2 sm:max-w-full mt-4'>
          {
            blogCategory.map((ele, index) => {
              return <span onClick={() => setSelectedCategory(ele)} key={index}
                className={`border text-xs px-4 py-1 rounded-xl min-w-fit cursor-pointer text-center
                    ${selectdCategory === ele ? 'bg-purple-50 text-purple-700' : 'text-gray-500 border-gray-300'}`}>{ele}</span>
            })
          }
        </div>

        <div className='mx-auto'>
          <button className='w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#C341F6] to-[#8E37EB]
               text-white rounded-lg cursor-pointer py-2 px-4 mt-6'>
            <Hash className='w-5' />
            Generate Titles</button>
        </div>
      </form>

      {/* response column */}
      <div className='w-full max-w-lg min-h-96 p-4 flex flex-col  bg-white  rounded-lg border border-gray-200 h-96'>
        <div className='flex items-center gap-3'>
          <Hash className='text-[#8E37EB] w-5 h-5' />
          <h1 className='text-xl font-semibold'>Generated Title</h1>
        </div>

        <div className='flex-1 flex justify-center items-center'>
          <div className='flex flex-col text-sm text-gray-400 gap-5 items-center'>
            <Hash className='w-9 h-9' />
            <p>Enter a Keyword,select a category and click "Generate Titles" to get started</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogTitles