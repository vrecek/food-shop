import React from 'react'
import { SummaryType } from '../../interfaces/SummaryInterfaces'

const SummaryPrice = ({ sumPrice, deliveryPrice }: SummaryType) => {
   return (
      <section className="summary-price">

         <h4>Products price: { sumPrice } $</h4>
         <h4 className='middle'>Delivery price: { deliveryPrice } $</h4>
         <h2>Total price: { sumPrice + deliveryPrice } $</h2>

      </section>
   )
}

export default SummaryPrice