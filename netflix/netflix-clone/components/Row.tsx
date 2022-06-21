import { ChevronDoubleLeftIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import React from 'react'
import Thumbnail from './Thubnails'

interface Props{
    title: string,
    movies:{}
}
function Row({title,movies}:Props) {
  return (
    <div className='h-40 space-y-0.5 md:space-y-2'>
      <h2 className='w-56 cursor-pointer text-sm font-semibold
       text-[#e5e5e5] transition duration-200 hover:text-white
       md:text-2xl'>{title}</h2>
      <div className='group relative md: -ml-2'>
        <ChevronLeftIcon className='absolute top-0 bottom-0 left-2 z-4 m-auto h-9 w-9 cursor-pointer opacity-0 transition duration-100 hover:scale-125 group-hover:opactity-100'/>
        <div className='flex items-center space-x-0.5 overflow-x-scroll md:space-x-2.5
        md:p-2'>
        </div>
        <ChevronRightIcon  className='absolute top-0 bottom-0 left-2 z-4 m-auto h-9 w-9
        cursor-poiter opacity-0 transition hover:scale-125 group-hover:opactity-100'/>
      </div>
    </div>
  )
}

export default Row 