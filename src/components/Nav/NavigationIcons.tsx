import React from 'react'
import NavigationMenuIcon from './NavigationMenuIcon'
import { ToggleMenuFunc } from '../../interfaces/NavigateInterfaces'
import NavigationBasketIcon from './Basket/NavigationBasketIcon'
import NavigationSearchIcon from './NavigationSearchIcon'

const NavigationIcons = ({ toggleFunc }: ToggleMenuFunc) => {
   return (
      <div className="icons">

         <NavigationSearchIcon />
         
         <NavigationBasketIcon toggleFunc={ (e) => toggleFunc(e, 'basket') } />

         <NavigationMenuIcon toggleFunc={ (e) => toggleFunc(e, 'menu') } />
         
      </div>
   )
}

export default NavigationIcons