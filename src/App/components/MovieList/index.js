import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Spinner from 'react-spinkit';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};
function MovieList({title,filter,carousel=false}) {
  const[movies,setmovies]=useState([])
  // const[popup ,setpopup]=useState(null)
  const[loading,setloading]=useState(false)

   const getmovies=async()=>{
    setloading(true)
    const response= await fetch(`https://yts.mx/api/v2/list_movies.json?${filter}`).then(res=>res.json())
     setTimeout(()=>{  
    setmovies(response.data.movies)
    console.log(response.data.movies)
    setloading(false)
     },2000)
   }

   useEffect(()=>{
    getmovies()
   },[])

  return (
 
    <div className="my-8">
       <h1 className='text-gray-100 text-2xl mb-6'>{title}</h1>
       {loading &&(
        <div className='flex py-5 justify-center'>
        <Spinner name="line-scale" color="purple"/>
      </div>
       )}
       {movies.length >0 &&(
        <>
        {
         carousel ?(
         <div className=''>
         <Carousel  
         autoPlay={true}
          swipeable={true}
          transitionDuration={1000}
          keyBoardControl={true}
          autoPlaySpeed={1500}
          responsive={responsive}
          infinite={true}
         >
         {movies?.map(movie=>(
         <MovieCard key={movie?.id}  {...movie}/>
         ))}
         </Carousel>
        </div>
         ):(
           <div className='flex items-start justify-between flex-wrap'>
         {movies?.map(movie=>(
         <MovieCard key={movie?.id} {...movie}  />
         ))}
        </div>
         )}
        </>
       )}
      {/* {popup &&(
        <div className='bg-black   w-screen h-screen fixed top-0 left-0 z-50'>
          <div className='text-gray-100' onClick={()=>setpopup(null)}>
             close
        </div>
        <div>
          <img src={popup?.small_cover_image} alt="image" className="w-40 h-40" />
          <h1 className='text-gray-100'>{popup?.title_long}</h1>
        </div>
        
     </div>
      )} */}
    </div>
    
  )
}

export default MovieList