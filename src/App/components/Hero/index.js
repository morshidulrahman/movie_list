import React from 'react'
import { AiOutlinePlayCircle } from 'react-icons/ai';
function  Hero() {
  return (
    <div className='relative py-3 '> 
        <img className="rounded-xl max-h-[370px] object-cover w-full"  src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DC9F38D287C3AE6BB492AA40C20CB826F9D297915B824F2C0F4D8CA8BC640C73/scale?width=2880&aspectRatio=1.78&format=jpeg" alt="beymax" loading='lazy'/>
        <div className='absolute md:top-12 top-5 left-5 md:left-12'>
            <h1 className='md:text-5xl text-2xl font-bold text-gray-100 '>Baymax 2.0!</h1>
            <button className='text-gray-100 bg-red-500 py-2 md:px-3 px-2 rounded-md mt-4 flex items-center space-x-2  '><AiOutlinePlayCircle size={15}/><span className='text-sm'>watch movie</span></button>
        </div>
    </div>
  )
}

export default  Hero