import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import Singlecard from './Singlecard';

function Trending() {


    const [data,setdata]=useState([])

    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGZlMWFiMWM1YzFmNDk3ZDJhMDY1ODRjNzljZGE5OSIsInN1YiI6IjY1NjlhMGVhZDM5OWU2MDExYmNmOTYxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vnikd54OLwXAOZqnkN5P4vN3-t7A80QLflgc25wU8zw'
            }
          };
          
          fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
            .then(response => response.json())
            .then(response =>{
                console.log(response.results) 
                setdata(response.results)}) 
            .catch(err => console.error(err));
    },[])
  return (
    <div className=' min-h-screen text-white mt-9 w-full'>
     
        <h1 className='text-center w-full text-3xl sm:text-4xl font-bold mb-3'>TRENDINGS</h1>
        <div className='flex w-full justify-around flex-wrap'>
        {
           data && data.map((e)=>(
               <Singlecard key={e.id}  title={e.original_title || e.name} poster={e.poster_path} rating={e.vote_average} date={e.release_date || e.first_air_date} type={e.media_type} />
            ))
        }
        </div>
    </div>
  )
}

export default Trending