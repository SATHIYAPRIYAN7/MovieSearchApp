import { Padding } from '@mui/icons-material'
import React from 'react'

function Header() {
  return (
    <div className='w-full shadow-md bg-black bg-opacity-40 scroll-smooth flex justify-between items-center  fixed top-0 z-50 '>
        <h1 className='font-bold text-2xl sm:text-3xl ml-5 sm:ml-10 py-4 sm:py-3 text-white mt-2'>CINEMA HUNT.</h1>
        <button  className='bg-white px-3 py-1 rounded-lg mr-5 sm:mr-10 text-lg font-semibold mt-2'>Get Started</button>
    </div>
  )
}

export default Header