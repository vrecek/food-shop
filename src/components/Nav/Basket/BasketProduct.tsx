import React from 'react'
import { FaTimes } from 'react-icons/fa'
import BasketContext from '../../../data/BasketFunc'
import { BasketNavItemType } from '../../../interfaces/NavigateInterfaces'
import FigureImage from '../../REUSABLE/FigureImage'
import { BasketFunctions } from '../../../data/BasketFunc'

const BasketProduct = ({ name, price, quantity, image, id, noDelIcon }: BasketNavItemType) => {
   const { basket, setBasket } = React.useContext(BasketContext)

   const deleteFromCart = () => BasketFunctions.deleteFromCart(id, basket, setBasket)

   return (
      <article className='basket-item'>

         <FigureImage source={ image } altTxt='item' />

         <div className="text-info">

            <h4>{ name }</h4>
            <h5>{ price } $</h5>

         </div>

         <div className="quantity-info">

            { quantity }

         </div>

         {
            !noDelIcon && 
            <div className="icon">

               <span onClick={ deleteFromCart }><FaTimes /></span>

            </div>
         }

      </article>
   )
}

export default BasketProduct