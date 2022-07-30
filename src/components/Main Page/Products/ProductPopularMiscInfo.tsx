import React from 'react'
import { ProductMiscellaneousInfo } from '../../../interfaces/OtherInterfaces'

const ProductPopularMiscInfo = ({ informations }: { informations: ProductMiscellaneousInfo[] }) => {
   return (
      <ul>
         {
            informations.map((x, i) => (
               <li key={ i }>
                  { x.icon } { x.text }
               </li>
            ))
         }
      </ul>
   )
}

export default ProductPopularMiscInfo