import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

const NavigationSearchIcon = () => {
   let isActive: boolean = false
   const n = useNavigate()
   
   const createInput = (): HTMLInputElement => {
      const input = document.createElement('input')
      input.placeholder = 'Type product to search...'
      input.type = 'text'

      input.addEventListener('keydown', (e: KeyboardEvent) => {
         const t = e.target as HTMLInputElement
         const { value } = t
         const { key } = e

         if(key === 'Enter' && value) {
            n(`/search/${ value }`, { state: { query: value } })
         }
      })

      return input
   }

   const showInput = (e: React.MouseEvent) => {
      const t: HTMLElement = e.target as HTMLElement

      if(isActive) {
         for(let x of Array.from(t.children as HTMLCollectionOf<HTMLElement>)) {
            if(x.tagName === 'INPUT') {
               x.style.top = '-300%'

               setTimeout(() => {
                  x.remove()
                  isActive = false
               }, 250)
            }
         }
         
         return
      }

      isActive = true

      const inp = createInput()
      t.appendChild(inp)

      setTimeout(() => {
         inp.style.top = '100%'
         inp.style.opacity = '1'
      }, 5)

      // sett
   }

   return (
      <span onClick={ showInput } className='one-icon search'>
         <BiSearch /> 
      </span>
   )
}

export default NavigationSearchIcon