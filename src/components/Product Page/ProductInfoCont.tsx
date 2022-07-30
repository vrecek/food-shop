import React from 'react'
import { ProductMiscellaneousInfo } from '../../interfaces/OtherInterfaces'
import ProductMiscInfo from './ProductMiscInfo'

const ProductInfoCont = ({ infos }: { infos: ProductMiscellaneousInfo[] }) => {
   return (
      <section className="cont-info">

         <h2>Details</h2>

         {
            infos.map((x, i) => (
               <ProductMiscInfo key={ i } text={ x.text } icon={ x.icon } />
            ))
         }

      </section>
   )
}

export default ProductInfoCont