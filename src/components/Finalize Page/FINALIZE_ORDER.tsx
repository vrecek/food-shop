import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../css/FinalizeOrder.css'
import BasketContext from '../../data/BasketFunc'
import BuyMethodContainer from './BuyMethodContainer'
import ProductsContainer from './ProductsContainer'

const FINALIZE_ORDER = () => {
   const [isCart, setCart] = React.useState<boolean>(false)
   const n = useNavigate()
   const { basket, setBasket } = React.useContext(BasketContext)

   React.useEffect(() => {
      if(basket.length <= 0) {
         n('/', { replace: true })
         return
      }
      
      setCart(true)
   }, [])

   if(isCart)
   return (
      <main className="finalize-order">
         
         <main className="content">
            
            <ProductsContainer basket={ basket } />

            <BuyMethodContainer setHook={ setBasket } basket={ basket } />

         </main>

      </main>
   )

   return (<></>)
}

export default FINALIZE_ORDER