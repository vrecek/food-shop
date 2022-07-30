import { Ref } from "../../interfaces/OtherInterfaces"

interface navScrollType {
   navRef: Ref<HTMLElement>,
   hiddenBack?: string,
   funcShow?: (nav: HTMLElement) => void,
   funcHide?: (nav: HTMLElement) => void
}

let scrolled: boolean = false
export const navScroll = ({ navRef, hiddenBack, funcHide, funcShow }: navScrollType) => {
   if(!navRef.current) return

   const nav = navRef.current

   if(window.scrollY >= 500 && !scrolled) {
      scrolled = true

      if(funcShow) funcShow(nav)

      nav.style.position = 'fixed'
      nav.style.top = '-50%'
      nav.style.left = '0'
      nav.style.background = 'rgb(206, 71, 21)'

      setTimeout(() => nav.style.top = '0', 5)
   }
   else if(window.scrollY < 500 && scrolled) {
      scrolled = false 
      
      nav.style.top = '0'
      nav.style.background = hiddenBack ?? 'rgb(206, 71, 21)'
      nav.style.position = 'relative' 

      if(funcHide) funcHide(nav)
   }
}