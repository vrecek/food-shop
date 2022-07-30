import React from 'react'
import { ButtonSliderType } from '../../../interfaces/HomepageInterfaces'

const SliderButtons = ({ clickFunc, imgNum }: ButtonSliderType) => {
   return (
      <div className="slider-buttons">
         {
            [...Array(imgNum)].map((x, i) => (
               <span 
                  key={ i }
                  onClick={ (e) => clickFunc(e, i + 1) } 
                  className={ i === 0 ? 'active' : '' }
               >

               </span>
            ))
         }
      </div>
   )
}

export default SliderButtons