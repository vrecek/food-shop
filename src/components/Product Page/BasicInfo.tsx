import React from 'react'
import { ProductGet } from '../../interfaces/ProductPageInterfaces'
import BasicInfoDetails from './BasicInfoDetails'
import BasicInfoImage from './BasicInfoImage'

const BasicInfo = ({ product }: ProductGet) => {
   return (
      <section className="basic-info">

         <BasicInfoImage image={ product.image } />

         <BasicInfoDetails 
            name={ product.title }
            rate={ product.rate }
            price={ product.price }
            category={ product.category }
            sizes={ product.sizes }
            id={ product.id }
            text={ product.shortPara }
         />

      </section>
   )
}

export default BasicInfo