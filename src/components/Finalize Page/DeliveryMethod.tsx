import React from 'react'
import { Ref } from '../../interfaces/OtherInterfaces'
import { DeliveryType } from '../../interfaces/SummaryInterfaces'
import InfoHeader from './InfoHeader'
import SelectType from './SelectType'

const DeliveryMethod = ({ deliveryHook }: DeliveryType) => {
   const sectRef: Ref<HTMLElement> = React.useRef<HTMLElement>(null)

   React.useEffect(() => {
      const c = sectRef.current!

      const items: HTMLInputElement[] = Array.from(c.children).map(x => x.children[0] as HTMLInputElement)
      items.splice(0, 1)
      
      for(let x of items) {
         x.addEventListener('change', (e: Event) => {
            const t: HTMLInputElement = e.target as HTMLInputElement
            const price: number = parseInt(t.parentElement!.children[2].textContent!.split(' ')[0]) || 0

            deliveryHook(price)
         })
      }
   }, [])

   return (
      <section ref={ sectRef } className="delivery-method">
         
         <InfoHeader>Select delivery</InfoHeader>

         <SelectType
            label='Post office'
            inputId='delivery'
            cname='delivery'
            rightItem='FREE'
         />

         <SelectType
            label='Pay on the spot'
            inputId='delivery'
            cname='delivery'
            rightItem='4 $'
         />

         <SelectType
            label='Courier 1'
            inputId='delivery'
            cname='delivery'
            rightItem='2 $'
         />

         <SelectType
            label='Courier 2'
            inputId='delivery'
            cname='delivery'
            rightItem='3 $'
         /> 

      </section>
   )
}

export default DeliveryMethod