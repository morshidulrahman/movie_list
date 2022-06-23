import React from 'react'
import { AiFillStar } from 'react-icons/ai';
function MovieCard({title_long,medium_cover_image,year,rating, }) {
  return (
    <div className='w-[157px] rounded-md p-2 bg-slate-800 my-4 hover:-translate-y-4 transition-all duration-500 mr-4 mb-4'>
         <img  className="rounded-md" src={medium_cover_image} alt="movie"/>
         <div className='mt-1'>  
             <h1 className='font-medium text-gray-100 mb-1 truncate' title={title_long}>{title_long}</h1>
             <div className='flex items-center'>
                 <div className='w-fit border-orange-400 text-orange-400 border rounded-md p-[3px] flex items-center text-xs'>
                     <AiFillStar size={14}/>
                     <span className='text-xs ml-1'>{rating}</span>
                 </div>
                 <span className='ml-2 text-xs text-gray-400'>{year}</span>
             </div>
         </div>
    </div>
  )
}

export default MovieCard