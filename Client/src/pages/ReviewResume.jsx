import React, { useState } from 'react'
import { Sparkles, FileText } from 'lucide-react'

const ReviewResume = () => {

  const [selectedFile, setSelectedFile] = useState('');

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
          <Sparkles className='w-5 text-[#00DA83]' />
          <h2 className='font-semibold text-xl'>Resume Review</h2>
        </div>

        <p className='text-slate-600 text-lg mt-6 sm:max-w-full'>Upload Resume</p>
        <input onChange={()=>handleFileChange(e)} accept='pdf/*' type="file" className='border border-gray-300 rounded-md w-full p-2 px-3 mt-2 text-sm outline-none cursor-pointer' required/>
        <p className='text-slate-400 text-xs mt-2 sm:max-w-full'>Supports PDF, JPG, PNG formats</p>

        <br />
        <button className='w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#00DA83] to-[#009BB3]
           text-white rounded-lg cursor-pointer py-2 px-4 mt-6'>
          <FileText className='w-5' />
          Review Resume</button>
      </form>

      {/* response column */}
      <div className='w-full max-w-lg min-h-96 p-4 flex flex-col  bg-white  rounded-lg border border-gray-200 h-96'>
        <div className='flex items-center gap-3'>
          <FileText className='text-[#00DA83] w-5 h-5' />
          <h1 className='text-xl font-semibold'>Analysis Results</h1>
        </div>

        <div className='flex-1 flex justify-center items-center'>
          <div className='flex flex-col text-sm text-gray-400 gap-5 items-center'>
            <FileText className='w-9 h-9' />
            <p>Upload your resume and click "Review Resume" to get started</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ReviewResume