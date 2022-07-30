import React from 'react'
import FigureImage from '../../REUSABLE/FigureImage'
import { HomepageNewProductType } from '../../../interfaces/HomepageInterfaces'
import ProductNewDetails from './ProductNewDetails'
import ButtonsContainer from './ButtonsContainer'

const ProductNew = ({ title, id, para, price, image }: HomepageNewProductType) => {
   return (
      <article className="product">

         <FigureImage source={ image } altTxt='product' />

         <article>

            <ProductNewDetails
               title={ title }
               para={ para }
               price={ price } 
            />

            <ButtonsContainer id={ id } />
            
         </article>

      </article>
   )
}

export default ProductNew