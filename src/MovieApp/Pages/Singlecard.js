import React from 'react'
import { img300 } from '../config'
import { Badge } from '@mui/material'


function Singlecard({poster,title,type,date,rating}) {
  return (
    <div>
        <div className='w-52  my-6 bg-white relative hover:scale-105 '>
        <Badge anchorOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }} style={{marginTop:"-20px",fontWeight:"bold",zIndex:"0",paddingLeft:"8px"}}  badgeContent={rating.toFixed(1)} color={rating>7?"success":"error"}/>
            <img className='px-2 -mt-4' src={`${img300}${poster}`} alt={title}/>
            <div className='absolute bottom-0 px-2 bg-black bg-opacity-50 w-full'>
                <h2 className='text-lg font-bold'>{title}</h2>
                <div className='flex justify-between text-gray-200 text-sm'><span>{type==="tv"?"Tv Series":"Movie"}</span>
                <span>{date}</span></div>
                
            </div>
        </div>
    </div>
  )
}

export default Singlecard