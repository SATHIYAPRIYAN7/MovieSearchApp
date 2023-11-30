import React from 'react'
import Header from './Header'
import SimpleBottomNavigation from './MainNav'
import HomePage from './HomePage'

function Movieapp() {
  return (
    <div className='bg-black'>
         <Header/>
         <HomePage/>
        <SimpleBottomNavigation />

    </div>
  )
}

export default Movieapp