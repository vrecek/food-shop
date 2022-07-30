import React from 'react'
import { ToggleMenuFunc } from '../../interfaces/NavigateInterfaces'
import NavigationMenuIcon from './NavigationMenuIcon'
import logo from '../../images/logo.png'
import FigureImage from '../REUSABLE/FigureImage'
import '../../css/NavigationMenu.css'
import NavigationMenuList from './NavigationMenuList'

const NavigationMenu = ({ toggleFunc }: ToggleMenuFunc) => {
   return (
      <aside className='menu'>

         <div className="icon-and-logo">

            <FigureImage source={ logo } />
            <NavigationMenuIcon toggleFunc={ toggleFunc } />
            
         </div>

         <NavigationMenuList />

      </aside>
   )
}

export default NavigationMenu