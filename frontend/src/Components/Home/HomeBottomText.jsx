import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottom = () => {
  return (
    <div className='font-[font2] mb-6  flex flex-shrink items-center justify-center gap-8 '>
      <div className='border-3 h-24 hover:border-[#d3fd50] hover:text-[#d3fd50] px-10 flex items-center border-white rounded-full uppercase'>
        <Link className="text-[6vw]" to="/projects">Projects</Link>
      </div>
      <div className='border-3 h-24 hover:border-[#d3fd50] hover:text-[#d3fd50] px-10 flex items-center border-white rounded-full uppercase'>
        <Link className="text-[6vw] " to="/agence">agence</Link>
      </div>
    </div>
  )
}

export default HomeBottom 