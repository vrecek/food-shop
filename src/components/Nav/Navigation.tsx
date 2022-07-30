import React from 'react'
import '../../css/Navigation.css'
import logo from '../../images/logo.png'
import { AsideOption, NavigateType } from '../../interfaces/NavigateInterfaces'
import FigureImage from '../REUSABLE/FigureImage'
import UserBasket from './Basket/UserBasket'
import NavigationIcons from './NavigationIcons'
import NavigationList from './NavigationList'
import NavigationMenu from './NavigationMenu'

const Navigation = ({ refHook }: NavigateType) => {
   const toggleMenu = (e: React.MouseEvent, asideType: AsideOption) => {
      const nav: HTMLElement = refHook.current!
      const index: number = asideType === 'menu' ? 4 : 3
      const aside: HTMLElement = nav.children[index] as HTMLElement

      nav.classList.toggle('active')
      const isAsideActive: boolean = nav.classList.contains('active')

      if(isAsideActive) {
         aside.style.transform = 'translateX(0)'

         return
      }

      aside.style.transform = 'translateX(105%)'
   }

   return (
      <nav ref={ refHook } className="layout-navigation">

         <FigureImage cname='logo' source={ logo } altTxt='logo' />

         <NavigationList />

         <NavigationIcons toggleFunc={ toggleMenu } />

         {/* HIDDEN MENUS */}
         <UserBasket toggleFunc={ toggleMenu } />
         <NavigationMenu toggleFunc={ toggleMenu } />
         
      </nav>
   )
}

export default Navigation