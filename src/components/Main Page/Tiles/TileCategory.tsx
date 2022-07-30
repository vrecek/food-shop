import React from 'react'
import { TileCategoryType } from '../../../interfaces/HomepageInterfaces'

const TileCategory = ({ category, icon }: TileCategoryType) => {
   return (
      <div className='category'>

         <h1>{ category }</h1>
         <span> { icon } </span>

      </div>
   )
}

export default TileCategory