import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SuggestedType } from '../../interfaces/ProductPageInterfaces'
import FigureImage from '../REUSABLE/FigureImage'

const Suggested = ({ image, title, price, id }: SuggestedType) => {
   const n = useNavigate()

   return (
      <article onClick={ () => n(`/product/${ id }`, { state: { id } }) }>

         <FigureImage source={ image } altTxt='suggestion' />

         <div>

            <h3>{ title }</h3>

            <h4>{ price }$</h4>

         </div>

      </article>
   )
}

export default Suggested