import React from 'react'
import { ButtonType } from '../../interfaces/ReusableInterfaces'

const Button = ({ text, cname, action, additional }: ButtonType) => {
   const blank = () => {}

   const btnAction: React.MouseEventHandler = action ?? blank
   const btnClass: string = cname ?? ''
   const btnAdditional: string | JSX.Element = <span>{ additional }</span> ?? <></>

   return (
      <button className={ btnClass } onClick={ btnAction }>
         <label style={{ pointerEvents: 'none' }}>{ text }</label>
         { btnAdditional }
      </button>
   )
}

export default Button