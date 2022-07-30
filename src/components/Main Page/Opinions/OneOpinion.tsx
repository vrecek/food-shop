import React from 'react'
import { OpinionType } from '../../../interfaces/OtherInterfaces'
import OpinionText from './OpinionText'
import OpinionTitleAndRate from './OpinionTitleAndRate'
import OpinionUserInfo from './OpinionUserInfo'

const OneOpinion = ({ name, surname, title, rate, txt, avatar }: OpinionType) => {
   return (
      <article className="opinion">

         <OpinionUserInfo 
            name={ name }
            surname={ surname }
            image={ avatar }
         />

         <article className='text'>

            <OpinionTitleAndRate 
               rate={ rate } 
               title={ title } 
            />

            <OpinionText txt={ txt } />

         </article>

      </article>
   )
}

export default OneOpinion