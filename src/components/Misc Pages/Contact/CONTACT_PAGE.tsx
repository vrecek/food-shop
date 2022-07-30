import React from 'react'
import '../../../css/Contact.css'
import { Ref } from '../../../interfaces/OtherInterfaces'
import Footer from '../../Footer/Footer'
import { navScroll } from '../../functions/navScroll'
import Navigation from '../../Nav/Navigation'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'

const CONTACT_PAGE = () => {
   const navRef: Ref<HTMLElement> = React.useRef<HTMLElement>(null)

   React.useEffect(() => {
      window.addEventListener('scroll', () => {
         navScroll({ navRef })
      })
   }, [])

   return (
      <main className="contact-page">

         <Navigation refHook={ navRef } />

         <main>

            <ContactForm />
            <ContactInfo />

         </main>

         <Footer />

      </main>
   )
}

export default CONTACT_PAGE