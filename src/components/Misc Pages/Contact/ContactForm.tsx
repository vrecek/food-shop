import React from 'react'
import Button from '../../REUSABLE/Button'

const ContactForm = () => {
   const submitForm = (e: React.FormEvent) => {
      e.preventDefault()

      const t = e.target as HTMLFormElement
   }

   return (
      <form onSubmit={ submitForm }>

         <h1>Contact form</h1>

         <input type="text" placeholder='Your name' />
         <input type="text" placeholder='Your mail' />
         <textarea placeholder='Your message'></textarea>

         <Button text='Submit' />

      </form>
   )
}

export default ContactForm