import React from 'react'
import { FaCcMastercard, FaPaypal } from 'react-icons/fa'
import InfoHeader from './InfoHeader'
import SelectType from './SelectType'

const PaymentMethod = () => {
   return (
      <section className="payment-method">

         <InfoHeader>Select payment</InfoHeader>

         <SelectType 
            cname='payment mastercard'
            rightItem={ <FaCcMastercard /> }
            inputId='payment'
            label='MasterCard'
         />

         <SelectType 
            cname='payment paypal'
            rightItem={ <FaPaypal /> }
            inputId='payment'
            label='PayPal'
         />

      </section>
   )
}

export default PaymentMethod