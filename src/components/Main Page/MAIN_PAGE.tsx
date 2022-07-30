import React from 'react'
import Footer from '../Footer/Footer'
import Navigation from '../Nav/Navigation'
import BackgroundImage from '../REUSABLE/BackgroundImage'
import Header from './Header/Header'
import headerImg from '../../images/header.jpg'
import mainImg from '../../images/mainBack.jpg'
import TilesSection from './Tiles/TilesSection'
import ProductsContainer from './Products/ProductsContainer'
import { ProductType, Ref } from '../../interfaces/OtherInterfaces'
import { ProductContext } from '../../App'
import Slider from './Slider/Slider'
import Opinions from './Opinions/Opinions'
import { BasketFunctions } from '../../data/BasketFunc'
import { HomepageProductsStateType } from '../../interfaces/HomepageInterfaces'
import { navScroll } from '../functions/navScroll'

const MAIN_PAGE = () => {
   const prods: ProductType[] = React.useContext(ProductContext)
   const navRef: Ref<HTMLElement> = React.useRef<HTMLElement>(null)
   const [products] = React.useState<HomepageProductsStateType>({
      latest: prods.sort((a, b) => b.addedDate - a.addedDate).slice(0, 6),
      all: BasketFunctions.shuffleProducts<ProductType>([...prods])
   })

   React.useEffect(() => {
      window.addEventListener('scroll', (e) => {
         navScroll({ 
            navRef,
            hiddenBack: 'none',
            funcShow: (nav) => {
               const header: HTMLElement = nav.parentElement!.children[1] as HTMLElement
               header.style.height = '100vh'
            },
            funcHide: (nav) => {
               const header: HTMLElement = nav.parentElement!.children[1] as HTMLElement
               header.style.height = 'calc(100vh - 64px)'
            }
         })
      })
   }, [])

   return (
      <main className="homepage">
         <BackgroundImage cname='homepage-background-entry' url={ headerImg }>

            <Navigation refHook={ navRef } />

            <Header />

         </BackgroundImage>

         <BackgroundImage cname='homepage-background-main' url={ mainImg } >

            <TilesSection />

            <ProductsContainer displayType='new' cname='new-product-container' headerTxt='New products' products={ products.latest } />

            <Slider />

            <ProductsContainer displayType='popular' cname='popular-product-container' headerTxt='Popular' products={ products.all } />

            <Opinions />

         </BackgroundImage>

         <Footer />
      </main>
   )
}

export default MAIN_PAGE