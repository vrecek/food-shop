import React from 'react'
import { Link } from 'react-router-dom'

const NavigationList = () => {
   return (
      <ul className='upper-links'>

         <li> <Link to='/'>Homepage</Link> </li>
         <li className='menu'> <Link to='/search'>Our menu</Link> </li>
         <li> <Link to='/contact'>Contact</Link> </li>
         
      </ul>
   )
}

export default NavigationList