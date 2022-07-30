import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BasketFunctions } from '../../data/BasketFunc'
import { RightSectionType } from '../../interfaces/SummaryInterfaces'
import { LoadingCss } from '../../Loading'
import Button from '../REUSABLE/Button'
import BackHomepage from './BackHomepage'
import DeliveryMethod from './DeliveryMethod'
import PaymentMethod from './PaymentMethod'
import SummaryPrice from './SummaryPrice'

const BuyMethodContainer = ({ basket, setHook }: RightSectionType) => {
   const [delPrice, setDelPrice] = React.useState<number>(0)
   const n = useNavigate()
   const totalPrice: number = basket.reduce((p, c) => p + c.price * c.inUsersBasket, 0)

   const displaySubmitMessage = (t: HTMLFormElement, success: boolean, txt: string) => {
      const h6 = document.createElement('h6')
      h6.className = `result ${ success ? 'true' : 'false' }`
      h6.textContent = txt

      t.appendChild(h6)

      setTimeout(() => h6.remove(), 2000)
   }

   const orderAction = (e: React.FormEvent) => {
      e.preventDefault()

      if(basket.length <= 0) return

      const t: HTMLFormElement = e.target as HTMLFormElement
      const inputs = Array.from(t.elements as HTMLCollectionOf<HTMLInputElement>)
      
      let msg: string = ''
      const paymentMethod: HTMLInputElement[] = inputs.filter(x => x.id === 'payment' && x.checked)
      const deliveryMethod: HTMLInputElement[] = inputs.filter(x => x.id === 'delivery' && x.checked)

      if(paymentMethod.length <= 0) msg = 'Select payment method'
      else if(deliveryMethod.length <= 0) msg = 'Select delivery method'

      if(msg) {
         displaySubmitMessage(t, false, msg)
         return
      }

      const l = new LoadingCss('loadingcss cont transparent')
      l.append(t)

      setTimeout(() => {
         l.remove()
         t.style.pointerEvents = 'none'

         displaySubmitMessage(t, true, 'Successfully ordered')

         BasketFunctions.clearAllQuantity(basket)

         setTimeout(() => {
            t.style.pointerEvents = 'all'
            setHook([])
            n('/', { replace: true })
         }, 1000)
      }, 2000)
   }

   return (
      <form onSubmit={ orderAction } className="buy-method-cont">

         <h1 className="summary">Summary</h1>

         <PaymentMethod />

         <DeliveryMethod deliveryHook={ setDelPrice } />

         <SummaryPrice 
            sumPrice={ totalPrice }
            deliveryPrice={ delPrice }  
         />

         <Button text='Order and pay' cname='order-pay' />

         <BackHomepage />

      </form>
   )
}

export default BuyMethodContainer