import React from 'react'
import { AiFillStar } from 'react-icons/ai'

const StarsContainer = ({ rate }: { rate: number }) => {
   return (
         <div className='stars'>
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

export default StarsContainer