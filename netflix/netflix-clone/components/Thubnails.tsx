import React from 'react'
import Image from 'next/image'

interface Props {
  movie:{}  
}

function Thubnails({movie}:Props) {
  console.log(movie)
  return (
    <div className='relative h-28 w-28 min-w-[180px] cursor-pointer transition
    duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105'>
      <Image className='rounded-sm object-cover md:rounded'
      src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
      layout='fill'></Image>
    </div>
  )
}

export default Thubnails