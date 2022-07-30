import React from 'react'
import { OpinionButtonsType } from '../../../interfaces/HomepageInterfaces'

const OpinionsSlideButtons = ({ imgNum, clickFunc }: OpinionButtonsType) => {
   return (
      <section className="slide-buttons">

         {
            [...Array(imgNum)].map((x, i) => (
               <span 
                  key={ i }
                  className={ i === 0 ? 'active' : '' }
                  onClick={ (e) => clickFunc(e, i) }
               >

               </span>
            ))
         }

      </section>
   )
}

export default OpinionsSlideButtons