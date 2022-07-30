import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FooterListType } from '../../interfaces/FooterInterfaces'

const FooterList = ({ listObj }: FooterListType) => {
   const n = useNavigate()

   return (
      <ul>

         {
            listObj.map((x, i) => (
               <li key={ i } onClick={ () => n(x.url) }>
                  { x.name }
               </li>
            ))
         }

      </ul>
   )
}

export default FooterList