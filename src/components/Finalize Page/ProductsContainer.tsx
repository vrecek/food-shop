import React from 'react'
import { ProductType } from '../../interfaces/OtherInterfaces'
import BasketProduct from '../Nav/Basket/BasketProduct'

const ProductsContainer = ({ basket }: { basket: ProductType[] }) => {
   return (
      <section className="products">

         <h1 className='products'>Ordered products</h1>

         {
            basket.map(x => (
               <BasketProduct 
                  key={ x.id }
                  id={ x.id }
                  image={ x.image }
                  noDelIcon={ true }
                  name={ x.title }
                  price={ x.price }
                  quantity={ x.inUsersBasket }
               />
            ))
         }

      </section>
   )
}

export default ProductsContainer