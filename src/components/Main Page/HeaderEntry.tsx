import React from 'react'
import { HeaderInfoType } from '../../interfaces/HomepageInterfaces'
import { Ref } from '../../interfaces/OtherInterfaces'

const HeaderEntry = ({ children, cname }: HeaderInfoType) => {
   const headerRef: Ref<HTMLHeadingElement> = React.useRef(null)

   React.useEffect(() => {
      const style = headerRef.current!.appendChild(document.createElement('style'))

      style.innerHTML = `
         h2.${ cname } {
            font-family: 'KoHo', sans-serif;
            text-shadow: 0 0 1px black;
            font-size: clamp(1.25rem, 5vw, 2.5rem);
            background: rgba(236, 235, 235, .7);
            padding: .5em;
            font-weight: 700;
            color: royalblue;
            width: max-content;
            position: relative;
         }

         h2.${ cname }::before {
            content: '';
            height: 3px;
            width: 100vw;
            box-shadow: 0 0 1px black;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 100%;
            background: rgba(236, 235, 235, .7);
         }
      `
   }, [])

   return (
      <h2 
         ref={ headerRef } 
         className={ cname }
      >
         { children }
      </h2>
   )
}

export default HeaderEntry