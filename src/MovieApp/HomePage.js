import React from 'react';

function HomePage({setinput,input,search,setsearch}) {

   function handlesearch(){
   if(input){
    setsearch(input)
    window.scroll(0,420)
    setinput("")
   }
   }

  return (
    <div className='flex items-center justify-center scroll-smooth' style={{backgroundImage:'url("https://www.wallpaperup.com/uploads/wallpapers/2015/12/12/859126/5b431ce5733d1553d3b7bf0efc11412e.jpg")',height:"60vh",backgroundSize:"cover",width:"100%"}}>
      
      <div className='overlay absolute inset-0 bg-black opacity-60 ' style={{height:"60vh"}}></div>

       <div className='text-white  absolute top-28 sm:top-32 text-center px-3'>
         <span className=' text-2xl  sm:text-4xl font-bold  '>Explore Cinematic Wonders<br/> Your Gateway to a World of Movies</span> 
       </div>
       <div className='z-40 w-96 mt-28 sm:mt-32 md:w-2/4 flex justify-between text-center border-2 border-white h-14 bg-black rounded-2xl overflow-hidden bg-opacity-60 mx-3 '>
        <input className=' bg-none border-none outline-none bg-transparent text-white pl-4 text-lg' value={input}  type='text' placeholder='Search movies here' onChange={(e)=>{setinput(e.target.value) 
        setsearch("")}}></input>
        <button onClick={handlesearch} className='bg-white px-7'>Search</button>
       </div>
    </div>
  )
}

export default HomePage;
