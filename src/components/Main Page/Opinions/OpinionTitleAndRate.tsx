import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { OpinionTitleAndRateType } from '../../../interfaces/HomepageInterfaces'

const OpinionTitleAndRate = ({ rate, title }: OpinionTitleAndRateType) => {
   return (
      <div className='tr-wrap'>

         <div className="stars">
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

         <h1>{ title }</h1>

      </div>
   )
}

export default OpinionTitleAndRate