import React from 'react'
import { BiCopy } from 'react-icons/bi'
import DetailsDiv from './DetailsDiv'

const ContactDetails = () => {
   const MAIL: string = 'loremipum@gmail.com'
   const PHONE: string = '123987456'

   const mailSpan = (): JSX.Element => {
      return (
         <span className='clipboard' onClick={ (e: React.MouseEvent) => {
            window.navigator.clipboard.writeText(MAIL)

            const t: HTMLElement = e.target as HTMLElement
            const tChildren: Element[] = Array.from(t.children)

            if(tChildren.some(x => x.tagName === 'SPAN')) return

            const span = document.createElement('span')
            span.textContent = 'Copied'

            t.appendChild(span)
            
            t.style.transform = 'scale(.9)'
            setTimeout(() => t.style.transform = 'scale(1)', 200)
            setTimeout(() => span.remove(), 2000)
         }}>
            <BiCopy />
         </span>
      )
   }

   return (
      <section className="contact-details">

         <DetailsDiv info='Mail' text={ MAIL } additional={ mailSpan() } />

         <DetailsDiv info='Phone' text={ PHONE } />
 
         <DetailsDiv info='Github' text={ 'Github account' } paraOnclick={ () => window.open('https://github.com/vrecek', '_blank') } />

      </section>
   )
}

export default ContactDetails