import React from 'react'
import '../../css/SearchPage.css'
import { ProductType, Ref } from '../../interfaces/OtherInterfaces'
import Navigation from '../Nav/Navigation'
import BackgroundImage from '../REUSABLE/BackgroundImage'
import back from '../../images/search.jpg'
import { useLocation } from 'react-router-dom'
import SearchBar from './SearchBar'
import { scroller } from 'react-scroll'
import { SearchLocationType, SearchStateHookType } from '../../interfaces/SearchInterface'
import HeaderTitle from './HeaderTitle'
import Footer from '../Footer/Footer'
import { LoadingCss } from '../../Loading'
import { BasketFunctions } from '../../data/BasketFunc'
import ResultContainer from './ResultContainer'

const SEARCH_PAGE = () => {
   const [result, setResult] = React.useState<SearchStateHookType>({
      finished: false,
      products: []
   })

   const location = useLocation()
   const loc: SearchLocationType = location.state as SearchLocationType
   

   const refs: Ref<HTMLElement>[] = [
      React.useRef<HTMLElement>(null),
      React.useRef<HTMLElement>(null)
   ]

   React.useEffect(() => scroller.scrollTo('App', { smooth: false }), [])
   
   React.useEffect(() => {
      setResult({
         products: [],
         finished: false
      })

      if(!loc?.query) return

      const l: LoadingCss = new LoadingCss('loadingcss cont height')
      l.append(refs[1].current!)

      setTimeout(() => {
         const prods: ProductType[] = BasketFunctions.searchProduct(loc.query)       
         setResult({
            products: prods,
            finished: true
         })

         l.remove()
      }, 1000)

   }, [location])


   return (
      <main className="search-page">

         <Navigation refHook={ refs[0] } />

         <BackgroundImage cname='search-background' url={ back }>

            <main>
               
               <HeaderTitle location={ loc } stateHook={ result }  />

               <SearchBar />

               <ResultContainer contRef={ refs[1] } stateHook={ result } />

            </main>

         </BackgroundImage>

         <Footer />
         
      </main>
   )

   return (
      <h1>xd</h1>
   )
}

export default SEARCH_PAGE