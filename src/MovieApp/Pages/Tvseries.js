import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import Singlecard from './Singlecard';
import { Pagination, Stack } from '@mui/material';

function Tvseries() {
    const[page,setpage]=useState(1);
    const [data,setdata]=useState([])
    const [nopages,setnopages]=useState()

    function handlepage(e){ 
      setpage(e);
      window.scroll(0,420)
     
    }


    useEffect(()=>{
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGZlMWFiMWM1YzFmNDk3ZDJhMDY1ODRjNzljZGE5OSIsInN1YiI6IjY1NjlhMGVhZDM5OWU2MDExYmNmOTYxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vnikd54OLwXAOZqnkN5P4vN3-t7A80QLflgc25wU8zw'
        }
      };
      
      fetch(`https://api.themoviedb.org/3/discover/tv?language=en-US&page=${page}`, options)
        .then(response => response.json())
        .then(response => {
            setdata(response.results)
        setnopages(response.total_pages)
        }
        )
        .catch(err => console.error(err));
    },[page])
  return (
    <div className=' min-h-screen scroll-smooth text-white mt-20 w-full'>
     
        <h1 className='text-center w-full text-3xl sm:text-4xl font-bold mb-3'>TV SERIES</h1>
        <div className='flex w-full justify-around flex-wrap'>
        {
           data && data.map((e)=>(
               <Singlecard key={e.id}  title={e.original_title || e.name} poster={e.poster_path} rating={e.vote_average} date={e.release_date || e.first_air_date} type={"TV Series"} />
            ))
        }
        </div>


          {/* -----------pagination----------- */}


        <div className='flex justify-center w-full mt-4'>

        <Pagination className='pb-40'
      count={nopages} onChange={(e)=>handlepage(e.target.textContent)} // Example count, replace with your actual count
      color="error" // Use a color from the Material-UI color palette
      sx={{
        '.MuiPaginationItem-root': {
          color: 'white', // Replace with your desired color
        },
        '.Mui-selected': {
          color: 'white', // Replace with your desired color for the selected page
        },
      }}
    />

    </div>



    </div>
  )
}

export default Tvseries