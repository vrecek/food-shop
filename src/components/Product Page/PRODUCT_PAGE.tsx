import React from 'react'
import '../../css/ProductPage.css'
import { ProductType, Ref } from '../../interfaces/OtherInterfaces'
import Footer from '../Footer/Footer'
import Navigation from '../Nav/Navigation'
import searchImg from '../../images/search.jpg'
import BackgroundImage from '../REUSABLE/BackgroundImage'
import FigureImage from '../REUSABLE/FigureImage'
import { useLocation, useNavigate } from 'react-router-dom'
import { ProductLocationType } from '../../interfaces/ProductPageInterfaces'
import Products from '../../data/Products'
import { LoadingCss } from '../../Loading'
import Content from './Content'
import { navScroll } from '../functions/navScroll'

const PRODUCT_PAGE = () => {
   const [product, setProduct] = React.useState<ProductType | null>(null)
   const location: ProductLocationType = useLocation().state as ProductLocationType
   const n = useNavigate()
   const navRef: Ref<HTMLElement> = React.useRef<HTMLElement>(null)

   React.useEffect(() => {
      window.scrollTo(0, 0)

      const load = new LoadingCss('loadingcss cont transparent small')
      load.append(navRef.current!.parentElement!.children[1].children[0].children[0] as HTMLElement)
      
      setTimeout(() => {
         load.remove()

         const { id } = location
         const product: ProductType[] = Products.filter(x => x.id === id)

         if(product.length === 1) {
            setProduct(product[0])
   
            return   
         }

         n('/error', { state: { code: 404, msg: 'Product not found' } })

         return
      }, 1500)

      window.addEventListener('scroll', () => {
         navScroll({ navRef })
      })

   }, [location])

   return (
      <main className="product-page">
         
         <Navigation refHook={ navRef } />
 
         <BackgroundImage cname='search-background' url={ searchImg }>

            <main>

               {
                  product && <Content product={ product } />
               }

            </main>

         </BackgroundImage>

         <Footer />

      </main>
   )
}

export default PRODUCT_PAGE