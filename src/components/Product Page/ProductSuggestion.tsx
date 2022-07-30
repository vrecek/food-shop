import React from 'react'
import Suggested from './Suggested'
import '../../css/ProductSuggestion.css'
import { useLocation } from 'react-router-dom'
import { ProductLocationType } from '../../interfaces/ProductPageInterfaces'
import { ProductType } from '../../interfaces/OtherInterfaces'
import Products from '../../data/Products'

const ProductSuggestion = () => {
   const [suggested, setSuggested] = React.useState<ProductType[]>([])
   const { id } = useLocation().state as ProductLocationType

   const searchSuggested = (): ProductType[] => {
      const { category, title } = Products.filter(x => x.id === id)[0]

      const regex: RegExp =  new RegExp(`${ title }`, 'i')

      const byName = Products.filter(x => x.id !== id && regex.test(x.title))
      const byCategory = Products.filter(x => x.id !== id && x.category === category)

      return [...byName, ...byCategory].slice(0, 5)
   }

   React.useEffect(() => {
      const items: ProductType[] = searchSuggested()

      if(items.length === 0) items.push(Products[0])

      setSuggested(items)
   }, [])

   return (
      <section className="product-suggestion">

         <h1>You may like it</h1>

         <section>

            {
               suggested.map(x => (
                  <Suggested 
                     key={ x.id }
                     id={ x.id }
                     title={ x.title }
                     image={ x.image }
                     price={ x.price }
                  />
               ))
            }

         </section>

      </section>
   )
}

export default ProductSuggestion