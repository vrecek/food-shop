import React from 'react'
import { InfoDetailsType } from '../../interfaces/ProductPageInterfaces'
import Button from '../REUSABLE/Button'
import StarsContainer from '../Search Page/StarsContainer'
import SizeSelect from './SizeSelect'
import { FiShoppingCart } from 'react-icons/fi'
import BasketContext, { BasketFunctions } from '../../data/BasketFunc'
import { animateBtn } from '../functions/animateBtn'

const BasicInfoDetails = ({ name, rate, category, price, sizes, text, id }: InfoDetailsType) => {
   const { basket, setBasket } = React.useContext(BasketContext)

   const addToCart = (e: React.MouseEvent) => {
      animateBtn(e.target as HTMLElement)

      BasketFunctions.addToCart(id, basket, setBasket)
   }

   return (
      <section className="details">

         <h3 className='category'>{ category }</h3>
         <h1 className='name'>{ name }</h1>
         <h2 className='price'>{ price }$</h2>
         <StarsContainer rate={ rate } />
         <p>{ text }</p>
         <SizeSelect sizes={ sizes } />
         <Button action={ addToCart } text='Add to cart' additional={ <FiShoppingCart /> } />

      </section>
   )
}

export default BasicInfoDetails