import React from 'react'
import { SearchHeaderType } from '../../interfaces/SearchInterface'

const HeaderTitle = ({ location, stateHook }: SearchHeaderType) => {
   if(!location) 
      return(
         <h1 className='title'>Enter a product name to start browsing !</h1>
      )

   else if(stateHook.finished)
      return (
         stateHook.products?.length
         ?
            <h1 className='title'>Search results: <span>{ location.query }</span></h1>
         :
            <h1 className='title'>No products found for: <span>{ location.query }</span></h1>
      )

   return (
      <h1 className="title">Searching products...</h1>
   )
}

export default HeaderTitle