import React from 'react'
import { ToggleMenuFunc } from '../../interfaces/NavigateInterfaces'

const NavigationMenuIcon = ({ toggleFunc }: ToggleMenuFunc) => {
   return (
      <div onClick={ (e) => toggleFunc(e, 'menu') } className="menu-icon">
         <span></span>
         <span></span>
         <span></span>
      </div>
   )
}

export default NavigationMenuIcon