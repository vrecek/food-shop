import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BasketNavContent } from '../../../interfaces/NavigateInterfaces'
import Button from '../../REUSABLE/Button'
import BasketProduct from './BasketProduct'
import TotalPrice from './TotalPrice'
import TotalProducts from './TotalProducts'

const DisplayBasketContent = ({ products }: BasketNavContent) => {
   const n = useNavigate()
   const price: number = products.reduce((p, c) => p + c.price * c.inUsersBasket, 0)
 
   return (
      <>
         <TotalProducts>{ products.length.toString() }</TotalProducts>

         <section className="products-container">  
            {
               products.map(x => (
                  <BasketProduct 
                     key={ x.id }
                     name={ x.title }
                     price={ x.price }
                     quantity={ x.inUsersBasket }
                     image={ x.image }
                     id={ x.id }
                  />
               ))
            }          
         </section>

         <TotalPrice>{ price.toString() }</TotalPrice>

         <Button text='Finalize order' action={ () => n('/finalize-order') } />
      </>
   )
}

export default DisplayBasketContent