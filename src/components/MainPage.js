import React from 'react'
import NavBar from './NavBar'
import Calender from './Calender'

const MainPage = () => {
  return (
    <div>

        <NavBar name="Simon Pohl" />
        <div className=' m-4'>
            <Calender  />
        </div>
    </div>
  )
}

export default MainPage