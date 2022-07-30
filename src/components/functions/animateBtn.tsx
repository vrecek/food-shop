export const animateBtn = (t: HTMLElement) => {
   t.style.transition = '.2s'
   t.style.transform = 'scale(.7)'
   t.style.background = 'green'

   setTimeout(() => {
      t.style.transform = 'scale(1)'
      t.style.transition = '.5s'

      setTimeout(() => {
         t.style.background = 'royalblue'
      }, 2000);
   }, 200);
}