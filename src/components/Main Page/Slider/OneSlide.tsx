import React from 'react'
import { SlideType } from '../../../interfaces/HomepageInterfaces'

const OneSlide = ({ sourceImg, cname, content }: SlideType) => {
   return (
      <figure className={`slide ${ cname }`}>
         <img loading='lazy' src={ sourceImg } alt='slider' />
         { content }
      </figure>
   )
}

export default OneSlide