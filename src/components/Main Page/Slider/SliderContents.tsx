import React from 'react'
import Button from '../../REUSABLE/Button'
import { GiForkKnifeSpoon, GiTomato } from 'react-icons/gi'
import { MdDeliveryDining } from 'react-icons/md'

const SliderThree = (): JSX.Element => {
   return (
      <article className='slide-1'>

         <section className="cont">

            <h1>Lorem ipsum dolor sit amet contestaur</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde pariatur hic quisquam maxime sint dolor, placeat soluta culpa quis sapiente.</p>
            <section>

               <div>
                  <span> <GiForkKnifeSpoon /> </span>
                  <h6>Fresh products</h6>
               </div>

               <div>
                  <span> <MdDeliveryDining /> </span>
                  <h6>Fast delivery</h6>
               </div>

               <div>
                  <span> <GiTomato /> </span>
                  <h6>Quality guaranteed</h6>
               </div>

            </section>

         </section>

      </article>
   )
}

const SliderOne = (): JSX.Element => {
   return (
      <article className='slide-2'>

         <section className="cont">

            <h1>Lorem ipsum dolor sit partiaur</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde pariatur hic quisquam maxime sint dolor, placeat soluta culpa quis sapiente quqisam maxime adipisicing.</p>
            <Button text='Check this out' />

         </section>

      </article>
   )
}

const SliderTwo = (): JSX.Element => {
   return (
      <article className='slide-3'>

         <section className="cont">

            <h1>Lorem ipsum dolor sit amet contestaur</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde pariatur hic quisquam maxime sint dolor, placeat soluta culpa quis sapiente.</p>

         </section>

      </article>
   )
}

export { SliderOne, SliderTwo, SliderThree }