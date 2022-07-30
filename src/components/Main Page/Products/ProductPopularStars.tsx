import React from 'react'
import { AiFillStar } from 'react-icons/ai'

const ProductPopularStars = ({ rate }: { rate: number }) => {
   return (
      <div>

         <h4>{ rate }</h4>

         {
            [...Array(5)].map((x, i) => {
               const cname: string = i < rate ? 'active' : ''

               return (
                  <span key={ i } className={ cname }> 
                     <AiFillStar /> 
                  </span>
               )
            })
         }

      </div>
   )
}

export default ProductPopularStars