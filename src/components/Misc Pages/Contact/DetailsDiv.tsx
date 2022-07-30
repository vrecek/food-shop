import React from 'react'
import { ContactDivDetailsType } from '../../../interfaces/MiscPagesInterfaces'

const DetailsDiv = ({ info, text, additional, paraOnclick }: ContactDivDetailsType) => {
   const blank = ()=>{}

   const func = paraOnclick ?? blank

   return (
      <div>
         <h2>{ info }:</h2>
         <p onClick={ func }>{ text } { additional && additional }</p>
      </div>
   )
}

export default DetailsDiv