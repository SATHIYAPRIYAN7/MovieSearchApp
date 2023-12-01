import React from 'react'
import Header from './Header'
import SimpleBottomNavigation from './MainNav'
import HomePage from './HomePage'
import { Container } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Trending from './Pages/Trending'
import Movies from './Pages/Movies'

function Movieapp() {
  return (
    <div className='bg-black'>
         <Header/>
         <HomePage/>
         <BrowserRouter>
         <Container>
          <Routes>
             <Route path='/trending' element={<Trending/>} />
             <Route path='/movies' element={<Movies/>} />

          </Routes>

         </Container>
         <SimpleBottomNavigation />
         </BrowserRouter>
        

    </div>
  )
}

export default Movieapp