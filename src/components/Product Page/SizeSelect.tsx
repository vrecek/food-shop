import React from 'react'

const SizeSelect = ({ sizes }: { sizes: string[] }) => {
   const setActive = (e: React.MouseEvent): void => {
      const t: HTMLElement = e.target as HTMLElement
      const children: HTMLElement[] = Array.from(t.parentElement!.children as HTMLCollectionOf<HTMLElement>)

      for(const x of children) x.className = ''

      t.className = 'active'
   }

   return (
      <div className="size-select">

         <h4>Select size</h4>

         <ul>

            {
               sizes.map((x, i) => (
                  <li onClick={ setActive } key={ i }>{ x }</li>
               ))
            }

         </ul>

      </div>
   )
}

export default SizeSelect