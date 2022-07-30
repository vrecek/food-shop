import React from 'react'
import FooterIcons from '../../Footer/FooterIcons'
import ContactDetails from './ContactDetails'

const ContactInfo = () => {
   return (
      <section className="informations">

         <section className="wrap">

            <h1>Contact us</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut commodi laboriosam consequuntur, iusto quam quod veniam soluta tenetur error possimus enim consequatur, in optio est totam et rerum dolore dolores?</p>

            <FooterIcons />

         </section>

         <ContactDetails />

      </section>
   )
}

export default ContactInfo