import React from 'react'
import { SearchResultContainerType } from '../../interfaces/SearchInterface'
import FigureImage from '../REUSABLE/FigureImage'
import SearchedItemsContainer from './SearchedItemsContainer'
import searchImg from '../../images/search_empty.png' 

const ResultContainer = ({ contRef, stateHook }: SearchResultContainerType) => {
   return (
      <section ref={ contRef } className="result-container">

         {
            stateHook.products?.length
            ?
               <SearchedItemsContainer products={ stateHook.products } />
            :
               <FigureImage cname='empty-search' source={ searchImg } altTxt='search' />
         }

      </section>
   )
}

export default ResultContainer