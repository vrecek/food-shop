import React from 'react'
import { AiFillFacebook, AiFillLinkedin } from 'react-icons/ai'
import { FaGithubSquare, FaInstagramSquare } from 'react-icons/fa'

const FooterIcons = () => {
   const openWindow = (url: string) => window.open(url, '_blank')

   return (
      <div className="icons">

         <span><AiFillFacebook /></span>
         <span onClick={ () => openWindow('https://github.com/vrecek') }><FaGithubSquare /></span>
         <span><AiFillLinkedin /></span>
         <span><FaInstagramSquare /></span>

      </div>
   )
}

export default FooterIcons