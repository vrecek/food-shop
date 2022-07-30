import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { ToggleMenuFunc } from '../../../interfaces/NavigateInterfaces'

const BackIcon = ({ toggleFunc }: ToggleMenuFunc) => {
   return (
      <span onClick={ (e) => toggleFunc(e, 'basket') }>
         <AiFillStar />
      </span>
   )
}

export default BackIcon