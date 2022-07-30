import React from 'react'
import FigureImage from '../../REUSABLE/FigureImage'
import ButtonsContainer from './ButtonsContainer'
import { HomepagePopularProductType } from '../../../interfaces/HomepageInterfaces'
import ProductPopularStars from './ProductPopularStars'
import ProductPopularMiscInfo from './ProductPopularMiscInfo'

const ProductPopular = ({ id, image, title, para, price, rate, misc }: HomepagePopularProductType) => {
   return (
      <article className="product">

         <FigureImage source={ image } altTxt='product' />

         <article>

            <h1>{ title }</h1>

            <p>{ para }</p>

            <ProductPopularMiscInfo informations={ misc } />

            <section>

               <ProductPopularStars rate={ rate } />

               <h3>{ price } $</h3>

            </section>

            <ButtonsContainer id={ id } />
            
         </article>

      </article>
   )
}

export default ProductPopular