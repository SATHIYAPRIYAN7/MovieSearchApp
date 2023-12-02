import React, { useState } from 'react'
import Header from './Header'
import SimpleBottomNavigation from './MainNav'
import HomePage from './HomePage'
import { Container } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Trending from './Pages/Trending'
import Movies from './Pages/Movies'
import Tvseries from './Pages/Tvseries'
import  Search  from './Pages/Search'

function Movieapp() {

  const [input,setinput]=useState("")
    const [search,setsearch]=useState("")

   console.log(input)

  return (
    <div className='bg-black scroll-smooth'>
         <Header/>
         <HomePage input={input} serach={search} setinput={setinput} setsearch={setsearch}/>
          <BrowserRouter>
       <Container>
         { search?<Search search={search} />: <Routes>
             <Route path='/trending' element={<Trending/>} />
             <Route path='/movies' element={<Movies/>} />
             <Route path='/tv' element={<Tvseries/>} />

          </Routes>}

         </Container>
         <SimpleBottomNavigation setsearch={setsearch} />
         </BrowserRouter>
        

    </div>
  )
}

export default Movieapp