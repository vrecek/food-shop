import React from 'react'
import '../../css/Ingredients.css'
import { ProductMiscellaneousInfo } from '../../interfaces/OtherInterfaces'
import ProductDetailsCont from './ProductDetailsCont'
import ProductInfoCont from './ProductInfoCont'

const Ingredients = ({ infos }: { infos: ProductMiscellaneousInfo[]}) => {
   return (
      <section className="product-details">

         <ProductDetailsCont />

         <ProductInfoCont infos={ infos } />

      </section>
   )
}

export default Ingredients