import React from 'react'
import { ProductType } from '../../interfaces/OtherInterfaces'
import ResultProduct from './ResultProduct'

const SearchedItemsContainer = ({ products }: { products: ProductType[] }) => {
   return (
      <section className="prod-container">
         
         {
            products.map(x => (
               <ResultProduct 
                  key={ x.id }
                  id={ x.id }
                  price={ x.price }
                  title={ x.title }
                  rate={ x.rate }
                  image={ x.image }
               />
            ))
         }

      </section>
   )
}

export default SearchedItemsContainer