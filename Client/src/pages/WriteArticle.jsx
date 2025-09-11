import React, { useState } from 'react';
import { Sparkles, SquarePen } from 'lucide-react';

const WriteArticle = () => {

  const articleLength = [
    { length: 800, text: 'Short (500-800 words)' },
    { length: 800, text: 'Medium (800-1200 words)' },
    { length: 800, text: 'Long (1200+ words)' },
  ];

  const [selectedLength, setSelectedLength] = useState(articleLength[0]);
  const [input, setInput] = useState('');

  const handleSubmit = async (e) => {
    e.prevantDefault();
  }

  return (
    <div className='h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700'>
      {/* promat column */}
      <form onSubmit={handleSubmit} className='p-4  max-w-sm bg-white  rounded-lg border border-gray-200'>
        <div className='flex items-center gap-3'>
          <Sparkles className='w-6 text-[#4A7AFF] mt-0.5' />
          <h2 className='font-semibold text-xl'>AI Article Writer</h2>
        </div>

        <p className='font-semibold text-sm mt-6 sm:max-w-full'>Article Topic</p>
        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" className='border border-gray-300 rounded-md w-full p-2 px-3 mt-2 text-sm outline-none'
          placeholder=' The future of article intelligence' required />

        <p className='font-medium mt-4 text-sm'>Article Length</p>

        <div className='flex flex-wrap mt-3 gap-2'>
          {
            articleLength.map((ele, index) => {
              return <span onClick={() => setSelectedLength(ele)} key={index}
                className={`border text-xs px-4 py-1 rounded-xl min-w-fit cursor-pointer items-center
                ${selectedLength.text === ele.text ? 'bg-blue-50 text-blue-700' : 'text-gray-500 border-gray-300'}`}>{ele.text}</span>
            })
          }
        </div>

        <br />
        <button className='w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#226BFF] to-[#65ADFF]
           text-white rounded-lg cursor-pointer py-2 px-4 mt-6'>
          <SquarePen className='w-5' />
          Generate article</button>
      </form>

      {/* response column */}
      <div className='w-full max-w-lg min-h-96 max-h-[600px] p-4 flex flex-col  bg-white  rounded-lg border border-gray-200 h-96'>
        <div className='flex items-center gap-3'>
          <SquarePen className='text-[#4A7AFF] w-5 h-5' />
          <h1 className='text-xl font-semibold'>Generated article</h1>
        </div>

        <div className='flex-1 flex justify-center items-center'>
          <div className='flex flex-col text-sm text-gray-400 gap-5 items-center'>
            <SquarePen className='w-9 h-9' />
            <p>Enter a topic and click "Generate Article" to get started</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default WriteArticle
