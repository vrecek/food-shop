import React from 'react'

const TotalPrice = ({ children }: { children: string }) => {
   return (
      <h1 className="price">
         Total price: 
         <span>{ children } $</span>
      </h1>
   )
}

export default TotalPrice