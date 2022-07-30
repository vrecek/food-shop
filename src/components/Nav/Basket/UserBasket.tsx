import React from 'react'
import '../../../css/NavigationBasket.css'
import BasketContext from '../../../data/BasketFunc'
import { ToggleMenuFunc } from '../../../interfaces/NavigateInterfaces'
import DisplayBasketContent from './DisplayBasketContent'
import EmptyBasket from './EmptyBasket'
import NavigationBasketIcon from './NavigationBasketIcon'

const UserBasket = ({ toggleFunc }: ToggleMenuFunc) => {
   const { basket } = React.useContext(BasketContext)

   return (
      <aside className="basket">
         
         <NavigationBasketIcon toggleFunc={ (e) => toggleFunc(e, 'basket') } />

         <section className="content">

            {
               basket?.length
               ?
                  <DisplayBasketContent products={ basket } />
               :
                  <EmptyBasket />
            }

         </section>

      </aside>
   )
}

export default UserBasket