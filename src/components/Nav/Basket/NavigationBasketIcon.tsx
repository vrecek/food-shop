import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { ToggleMenuFunc } from '../../../interfaces/NavigateInterfaces'

const NavigationBasketIcon = ({ toggleFunc }: ToggleMenuFunc) => {
   return (
      <span 
         onClick={ (e) => toggleFunc(e, 'basket') } 
         className='one-icon cart'
      > 
         <FiShoppingCart /> 
      </span>
   )
}

export default NavigationBasketIcon