import React from 'react'
import { ProductMiscellaneousInfo } from '../../interfaces/OtherInterfaces'

const ProductMiscInfo = ({ text, icon }: ProductMiscellaneousInfo) => {
   return (
      <div>

         <span>{ icon }</span>
         <p>{ text }</p>
      
      </div>
   )
}

export default ProductMiscInfo