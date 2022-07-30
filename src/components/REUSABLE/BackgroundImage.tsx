import React from 'react'
import { BackgroundImageType } from '../../interfaces/ReusableInterfaces'

const BackgroundImage = ({ children, cname, url }: BackgroundImageType) => {
   const className: string = cname ?? ''

   return (
      <div style={{
         backgroundImage: `url(${ url })`
      }} className={ `background-image ${ className }` }>
         <div className={ className }>
            { children }
         </div>
      </div>
   )
}

export default BackgroundImage