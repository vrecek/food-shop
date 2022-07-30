import React from 'react'
import { Ref } from '../../interfaces/OtherInterfaces'
import { IoIosArrowUp } from 'react-icons/io'

const Arrow = () => {
   const arrowRef: Ref<HTMLDivElement> = React.useRef<HTMLDivElement>(null)
   
   React.useEffect(() => {
      let visible: boolean = false
      const c: HTMLDivElement = arrowRef.current!

      window.addEventListener('scroll', () => {
         if(!visible && window.scrollY >= 500) {
            c.style.opacity = '1'
            c.style.pointerEvents = 'all'

            visible = true
         }

         else if(visible && window.scrollY < 500) {
            c.style.opacity = '0'
            c.style.pointerEvents = 'all'

            visible = false
         }
      })
   }, [])

   return (
      <div onClick={ () => window.scrollTo(0, 0) } ref={ arrowRef } className="scroll-arrow">

         <IoIosArrowUp />
         
      </div>
   )
}

export default Arrow