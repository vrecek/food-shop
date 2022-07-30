import React from 'react'

const TotalProducts = ({ children }: { children: string }) => {
   return (
      <h1 className='total'>
         Total products: &nbsp;{ children }
      </h1>
   )
}

export default TotalProducts