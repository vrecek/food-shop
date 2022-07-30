import React from 'react'
import '../../../css/Header.css'
import HeaderButtons from './HeaderButtons'

const Header = () => {
   return (
      <header className="homepage-header">

         <main>

            <h1>Lorem <span>ipsum</span> dolor sit amet</h1>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi aperiam consectetur nobis eveniet magnam eum molestiae, sapiente nisi. Id praesentium numquam aspernatur necessitatibus.</p>

            <HeaderButtons />
            
         </main>

      </header> 
   )
}

export default Header