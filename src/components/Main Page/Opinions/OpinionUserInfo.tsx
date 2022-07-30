import React from 'react'
import { OpinionUserInfoType } from '../../../interfaces/HomepageInterfaces'
import FigureImage from '../../REUSABLE/FigureImage'

const OpinionUserInfo = ({ image, name, surname }: OpinionUserInfoType) => {
   return (
      <section className='user'>

         <FigureImage source={ image } altTxt='user' />
         
         <div>

            <h2>{ name }</h2>
            <h2>{ surname }</h2>
            
         </div>

      </section>
   )
}

export default OpinionUserInfo