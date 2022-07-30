import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { MdOutlinePageview } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import BasketContext, { BasketFunctions } from '../../../data/BasketFunc'
import { animateBtn } from '../../functions/animateBtn'
import Button from '../../REUSABLE/Button'

const ButtonsContainer = ({ id }: { id: string }) => {
   const { setBasket, basket } = React.useContext(BasketContext)
   const n = useNavigate()

   const addToCart = (e: React.MouseEvent) => {
      animateBtn(e.target as HTMLElement)

      BasketFunctions.addToCart(id, basket, setBasket)
   }

   return (
      <div className="btn-wrap">

         <Button cname='add-to-cart' action={ addToCart } text='Add to cart' additional={ <FiShoppingCart /> } />
         <Button cname='redirect' action={ () => n(`/product/${ id }`, { state: { id } }) } text='Details' additional={ <MdOutlinePageview /> } />
         
      </div>
   )
}

export default ButtonsContainer