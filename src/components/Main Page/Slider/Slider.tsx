import React from 'react'
import '../../../css/Slider.css'
import { Direction } from '../../../interfaces/HomepageInterfaces'
import { Ref } from '../../../interfaces/OtherInterfaces'
import MoveArrow from './MoveArrow'
import OneSlide from './OneSlide'
import SliderButtons from './SliderButtons'
import img1 from '../../../images/slide1.jpg'
import img2 from '../../../images/slide2.jpg'
import img3 from '../../../images/slide3.jpg'
import * as slides from './SliderContents'

const Slider = () => {
   const sliderCont: Ref<HTMLElement> = React.useRef<HTMLElement>(null)
   let isActive: boolean = false

   React.useEffect(() => {

      const slider: HTMLElement = sliderCont.current!
      const len: number = Array.from(slider.children).length

      slider.style.transform = 'translateX(-100%)'

      slider.addEventListener('transitionend', () => {
         const counter: number = parseInt(slider.getAttribute('counter') ?? '1')

         if(counter === 0 || counter === len - 1) {
            slider.style.transition = '0s'

            const hasEndedOnRight: boolean = counter === len - 1

            // If it is last image, slide to the first image, otherwise slide to the last image
            
            const counterFix: number = hasEndedOnRight ? 100 : (len - 2) * 100
            const attrSet: number = hasEndedOnRight ? 1 : len - 2
          
            slider.style.transform = `translateX(-${ counterFix }%)`
            slider.setAttribute('counter', attrSet.toString())

            setTimeout(() => slider.style.transition = '.2s', 5)
         }

         isActive = false
      })

   }, [])
   
   const animateClick = (iconSvg: HTMLSpanElement) => {
      iconSvg.style.transition = '.2s'
      iconSvg.style.transform = 'scale(.5)'

      setTimeout(() => {
         iconSvg.style.transition = '0'
         iconSvg.style.transform = 'scale(1)'
      }, 200)
   }

   const moveSlider = (e: React.MouseEvent, dir: Direction) => {
      if(isActive) return
      isActive = true

      const t: HTMLSpanElement = e.target as HTMLSpanElement

      const slider: HTMLElement = sliderCont.current!

      animateClick(t.children[0] as HTMLElement)

      const counterAttr: number = parseInt(slider.getAttribute('counter') ?? '1')
      let counter: number = counterAttr

      if(dir === 'left') counter -= 1
      else if(dir === 'right') counter += 1
      
      slider.setAttribute('counter', counter.toString())

      const contChildren: Element[] = Array.from(slider.parentElement!.children)
      const btnCont: Element = contChildren[contChildren.length - 1]
      
      for(let x of Array.from(btnCont.children)) x.className = ''

      const imgLen: number = slider.children.length - 2
      const index: number = counter === 0 ? imgLen - 1 : counter === imgLen + 1 ? 0 : counter - 1
      btnCont.children[index].className = 'active'
 
      slider.style.transform = `translateX(-${ counter * 100 }%)`
   }

   const buttonSlider = (e: React.MouseEvent, num: number) => {
      const t: HTMLElement = e.target as HTMLElement
      const container: HTMLElement = t.parentElement as HTMLElement
      const slider: HTMLElement = sliderCont.current!

      for(let x of Array.from(container.children)) x.className = ''

      slider.setAttribute('counter', num.toString())
      slider.style.transform = `translateX(-${ num * 100 }%)`

      t.className = 'active'
   }

   return (
      <main className="slider-container">

         <section className="slider-section">

            <MoveArrow clickAction={ (e: React.MouseEvent) => moveSlider(e, 'left') } dir='left' />

            <section ref={ sliderCont } className="moving-element">

               <OneSlide sourceImg={ img1 } cname='slide' content={ slides.SliderThree() } />

               <OneSlide sourceImg={ img2 } cname='slide' content={ slides.SliderOne() } />
               <OneSlide sourceImg={ img3 } cname='slide' content={ slides.SliderTwo() } />
               <OneSlide sourceImg={ img1 } cname='slide' content={ slides.SliderThree() } />

               <OneSlide sourceImg={ img2 } cname='slide' content={ slides.SliderOne() } />

            </section>

            <MoveArrow clickAction={ (e: React.MouseEvent) => moveSlider(e, 'right') } dir='right' />

            <SliderButtons clickFunc={ buttonSlider } imgNum={ 3 } />

         </section>
         
      </main>
   )
}

export default Slider