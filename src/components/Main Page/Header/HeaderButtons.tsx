import React from 'react'
import Button from '../../REUSABLE/Button'
import { IoFastFoodOutline } from 'react-icons/io5'
import { MdOutlineScreenSearchDesktop } from 'react-icons/md'
import { scroller } from 'react-scroll'
import { useNavigate } from 'react-router-dom'

const HeaderButtons = () => {
   const n = useNavigate()

   const scrollPopular = () => scroller.scrollTo('popular-product-container', {})
   const exploreOffer = () => n('/search')

   return (
      <div>

         <Button action={ scrollPopular } additional={ <IoFastFoodOutline /> } text='Check popular' />
         <Button action={ exploreOffer } additional={ <MdOutlineScreenSearchDesktop /> } text='Explore offer' />
         
      </div>
   )
}

export default HeaderButtons