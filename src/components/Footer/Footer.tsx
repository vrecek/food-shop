import React from 'react'
import '../../css/Footer.css'
import FigureImage from '../REUSABLE/FigureImage'
import logo from '../../images/logo.png'
import { ListType } from '../../interfaces/FooterInterfaces'
import FooterList from './FooterList'
import FooterIcons from './FooterIcons'

const Footer = () => {
   const listObjects: ListType[][] = [
      [
         {
            name: 'Homepage',
            url: '/'
         }
      ],

      [
         {
            name: 'Basket',
            url: '/finalize-order'
         },
         {
            name: 'Browse offer',
            url: '/search'
         }
      ],

      [
         {
            name: 'Contact',
            url: '/contact'
         },
         {
            name: 'T & C',
            url: '/terms-and-conditions'
         }
      ],
   ]
   
   return (
      <footer className='layout-footer'>
         
         <section className='lists'>

            <FigureImage source={ logo } altTxt='logo' />

            <FooterList listObj={ listObjects[0] } />
            <FooterList listObj={ listObjects[1] } />
            <FooterList listObj={ listObjects[2] } />

         </section>

         <section className="finish">

            <FooterIcons />

            <p>&copy; All rights reserved &copy;</p>

         </section>

      </footer>
   )
}

export default Footer