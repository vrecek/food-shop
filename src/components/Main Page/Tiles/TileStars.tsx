import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { TileRatingType } from '../../../interfaces/HomepageInterfaces'

const TileStars = ({ rating }: TileRatingType) => {
   return (
      <div className="stars">
         {
            [...Array(5)].map( (x, i) => {
               const cname: string = i < rating ? 'active' : ''

               return (<span key={ i } className={ cname }> <AiFillStar /> </span>)
            } )
         }
      </div>
   )
}

export default TileStars