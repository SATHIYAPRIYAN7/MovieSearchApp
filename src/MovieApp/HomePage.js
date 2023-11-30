import React from 'react';

function HomePage() {
  return (
    <div className='flex items-center justify-center' style={{backgroundImage:'url("https://www.wallpaperup.com/uploads/wallpapers/2015/12/12/859126/5b431ce5733d1553d3b7bf0efc11412e.jpg")',height:"100vh",backgroundSize:"cover",width:"100%"}}>
      
      <div className='overlay absolute inset-0 bg-black opacity-60 '></div>

       <div className='text-white  absolute top-48 text-center px-3'>
         <span className='text-4xl font-bold  '>Explore Cinematic Wonders<br/> Your Gateway to a World of Movies</span> 
       </div>
       <div className='z-40 w-96 md:w-2/4 flex justify-between text-center border-2 border-white h-14 bg-black rounded-2xl overflow-hidden bg-opacity-60 mx-3 '>
        <input className=' bg-none border-none outline-none bg-transparent text-white pl-4 text-lg' type='text'></input>
        <button className='bg-white px-7'>Search</button>
       </div>
    </div>
  )
}

export default HomePage;
