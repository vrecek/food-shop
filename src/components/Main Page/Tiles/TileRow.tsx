import React from 'react'
import { TilesRowType } from '../../../interfaces/HomepageInterfaces'
import Tile from './Tile'

const TileRow = ({ threeCategories }: TilesRowType) => {
   return (
      <div className="row">
         {
            threeCategories.map((x, i) => (
               <Tile 
                  key={ i } 
                  category={ x.category } 
                  icon={ x.icon } 
                  rating={ x.rating } 
                  text={ x.text }
               />
            ))
         }
      </div>
   )
}

export default TileRow