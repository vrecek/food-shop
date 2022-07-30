import React from 'react'
import { ProductContainerType } from '../../../interfaces/HomepageInterfaces'
import ProductNew from './ProductNew'
import '../../../css/Products.css'
import '../../../css/ProductsPopular.css'
import HeaderEntry from '../HeaderEntry'
import ProductPopular from './ProductPopular'

const ProductsContainer = ({ headerTxt, products, cname, displayType }: ProductContainerType) => {
   const displayItems = (): JSX.Element[] => {
      if(displayType === 'new') {
         return products.map((x, i) => (
            <ProductNew 
               key={ i } 
               title={ x.title }
               para={ x.shortPara }
               price={ x.price }
               id={ x.id }
               image={ x.image }
            />
         ))
      }

      else if(displayType === 'popular') {
         return products.map((x, i) => (
            <ProductPopular
               rate={ x.rate } 
               misc={ x.miscInfo }
               key={ i } 
               title={ x.title }
               para={ x.shortPara }
               price={ x.price }
               id={ x.id }
               image={ x.image }
            />
         ))
      }

      return []
   }

   return (
      <section className={ cname }>

         <HeaderEntry cname={ cname }>
            { headerTxt }
         </HeaderEntry>

         <section className="container">

            {
               displayItems()
            }

         </section>

      </section>
   )
}

export default ProductsContainer