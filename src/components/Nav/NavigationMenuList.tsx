import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHome, AiOutlineQuestion } from 'react-icons/ai'
import { GiForkKnifeSpoon } from 'react-icons/gi'
import { MdOutlineMessage } from 'react-icons/md'
import { BsInfoCircle } from 'react-icons/bs'

const NavigationMenuList = () => {
   return (
      <ul>
         <li> 
            <Link to='/'> <AiOutlineHome /> Homepage</Link> 
         </li>

         <li> 
            <Link className='dropdown-li' to='/search'> <GiForkKnifeSpoon /> Our menu</Link> 
         </li>

         <li> 
            <Link to='/contact'> <MdOutlineMessage /> Contact</Link> 
         </li>

         <li> 
            <Link to='/terms-and-conditions'> <BsInfoCircle /> Terms and Conditions</Link> 
         </li>
      </ul>
   )
}

export default NavigationMenuList