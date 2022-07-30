import React from 'react'
import { SearchPageProduct } from '../../interfaces/SearchInterface'
import ButtonsContainer from '../Main Page/Products/ButtonsContainer'
import FigureImage from '../REUSABLE/FigureImage'
import StarsContainer from './StarsContainer'

const ResultProduct = ({ rate, price, title, id, image }: SearchPageProduct) => {
   return (
      <article className="searched-product">

         <FigureImage source={ image } altTxt='product' />

         <section>

            <div className="wrap">
               <h1>{ title }</h1>
               <StarsContainer rate={ rate } />
            </div>

            <h4>{ price } $</h4>

            <ButtonsContainer id={ id } />

         </section>

      </article>
   )
}

export default ResultProduct