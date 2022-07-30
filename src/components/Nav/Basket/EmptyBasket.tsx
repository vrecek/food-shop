import React from 'react'
import { GiWorriedEyes } from 'react-icons/gi'

const EmptyBasket = () => {
   return (
      <div className="empty-cart">

         <h2> <GiWorriedEyes /> Cart is empty <GiWorriedEyes /> </h2>
         <h2>Start shopping</h2>

      </div>
   )
}

export default EmptyBasket