import React from 'react'
import { HomepageProductDivType } from '../../../interfaces/HomepageInterfaces'

const ProductNewDetails = ({ price, title, para }: HomepageProductDivType) => {
   return (
      <>
         <div className='wrap'>  

            <h3>{ title }</h3>

            <h4>{ price } $</h4>

         </div>

         <p>{ para }</p>
      </>
   )
}

export default ProductNewDetails