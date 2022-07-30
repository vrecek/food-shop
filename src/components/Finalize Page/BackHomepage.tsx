import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const BackHomepage = () => {
   const n = useNavigate()

   return (
      <span onClick={ () => n('/', { replace: true }) } className="home">
         <AiOutlineHome />
      </span>
   )
}

export default BackHomepage