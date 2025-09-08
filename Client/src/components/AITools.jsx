import React from 'react'
import { AiToolsData } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

// grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 mt-6 gap-6
const AITools = () => {
  const navigate = useNavigate();
  return (
    <div className='py-3 px-4 sm:px-20 xl:px-32'>
      <div className='text-center mt-20'>
        <h1 className='text-2xl sm:text-3xl md:text-3xl 2xl:text-5xl font-semibold mx-auto leading-[1.3]'>Powerful AI Tools</h1>
        <p className='mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-xs text-gray-600'>Everything you need to create,enhance and optimize your content with cutting-edge AI technology </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 mb-16 mt-8 gap-6 px-4 mx-4' >
        {
          AiToolsData.map((aitool, index) => (
            <div onClick={()=>{navigate(aitool.path)}} key={index} className='group cursor-pointer py-6 px-6 rounded-lg flex flex-col' style={{
              boxShadow: "0 0 5px 2px rgba(0,0,0,0.1)"
            }}>
              
              <aitool.Icon className='justify-start rounded-2xl  w-12 h-12 py-3 text-white' style={
                {backgroundImage:`linear-gradient(${aitool.bg.from},${aitool.bg.to})`}
              }/>
              <h4 className='text-1xl font-semibold  leading-[1.6] py-3'>{aitool.title}</h4>
              <p className='text-sm font-medium  text-gray-500'>{aitool.description}</p>

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default AITools
