import React from 'react'
import '../../../css/Opinions.css'
import OneOpinion from './OneOpinion'
import OpinionsSlideButtons from './OpinionsSlideButtons'
import OpinionTitle from './OpinionTitle'
import OpinionsData, { returnElement } from '../../../data/Opinions'
import { Ref } from '../../../interfaces/OtherInterfaces'

const Opinions = () => {
   const sliderRef: Ref<HTMLElement> = React.useRef<HTMLElement>(null)
   let counter: number = 1
   let interval: NodeJS.Timer

   const intervalSetFunc = (slider: HTMLElement, buttons: Element[]): void => {
      interval = setInterval(() => {
         if(!document.hasFocus()) return

         slider.style.transform = `translateX(-${ ++counter * 100 }%)`

         for(let x of buttons) x.className = ''

         if(counter > OpinionsData.length) {
            buttons[0].className = 'active'

            return
         }

         buttons[counter - 1].className = 'active'
      }, 6000)
   }

   React.useEffect(() => {
      const sl: HTMLElement = sliderRef.current!
      const imgNum: number = OpinionsData.length
      const btnCont: HTMLElement = sl.parentElement!.children[1] as HTMLElement

      intervalSetFunc(sl, Array.from(btnCont.children))

      sl.addEventListener('transitionend', () => {
         if(counter >= imgNum + 1) {
            counter = 1

            sl.style.transition = '0s'
            sl.style.transform = `translateX(-100%)`

            setTimeout(() => {
               sl.style.transition = '.8s'
            }, 5);
         }
      })
   }, [])

   const clickBtnSlider = (e: React.MouseEvent, num: number) => {
      const t: HTMLElement = e.target as HTMLElement
      const sl: HTMLElement = sliderRef.current!
      const buttons: Element[] = Array.from(t.parentElement!.children)

      clearInterval(interval)

      for(const x of buttons) x.className = ''
      t.className = 'active'

      counter = num + 1
      sl.style.transform = `translateX(-${ counter * 100 }%)`

      intervalSetFunc(sl, buttons)
   }

   return (
      <section className="opinions-container">

         <OpinionTitle />

         <div className="container">

            <section ref={ sliderRef } className="moving-element">

               { returnElement('last') }

               {
                  OpinionsData.map((x, i) => (
                     <OneOpinion
                        key={ i } 
                        title={ x.title }
                        txt={ x.txt }
                        rate={ x.rate }
                        avatar={ x.avatar }
                        name={ x.name }
                        surname={ x.surname }
                     />
                  ))
               }

               { returnElement('first') }

            </section>

            <OpinionsSlideButtons imgNum={ OpinionsData.length } clickFunc={ clickBtnSlider } />

         </div>
         
      </section>
   )
}

export default Opinions