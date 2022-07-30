import React from 'react'
import { Ref } from '../../../interfaces/OtherInterfaces'
import { navScroll } from '../../functions/navScroll'
import Navigation from '../../Nav/Navigation'
import '../../../css/TandC.css'
import Footer from '../../Footer/Footer'

const TERMS_AND_COND = () => {
   const navRef: Ref<HTMLElement> = React.useRef<HTMLElement>(null)

   React.useEffect(() => {
      window.addEventListener('scroll', () => {
         navScroll({ navRef })
      })
   }, [])

   return (
      <main className="terms-and-conditions">

         <Navigation refHook={ navRef } />

         <main>

            <h1>Terms and Conditions</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptas! Commodi exercitationem perspiciatis voluptatem neque voluptate repellendus non, doloremque eligendi, architecto voluptates dolores quis quae provident distinctio ipsa dolore laudantium!</p>

            <h2>Sed pulvinar lacus</h2>

            <p>Vivamus at finibus purus. Sed dignissim nibh et sapien sagittis feugiat. Vestibulum tortor purus, interdum vel ligula nec, rhoncus placerat justo. Quisque pulvinar leo in arcu tempus, a finibus elit vestibulum. Vestibulum diam erat, posuere non mauris eget, rhoncus pharetra magna. Sed eleifend egestas magna, at volutpat nunc hendrerit et. Donec sollicitudin nulla a mauris laoreet, vitae cursus purus tristique. Nam eget volutpat odio. Morbi sollicitudin tempor finibus. Nunc tristique ipsum id laoreet cursus. Morbi ut leo dapibus, tincidunt sapien quis, viverra nulla.

            Proin pharetra non mauris non vulputate. Pellentesque fermentum eu diam ut gravida. Nullam accumsan vel justo sed dapibus. Mauris tristique vitae nulla nec lacinia. Donec euismod, quam sed suscipit commodo, diam magna viverra est, sit amet imperdiet tortor diam nec tortor. Cras in fringilla libero. Cras sagittis fermentum diam, id pharetra neque viverra at. Suspendisse potenti.</p>

            <h2>Morbi ac enim nec elit dignissim</h2>

            <p>Sed felis odio, interdum vitae egestas ac, ullamcorper vitae odio. Morbi ac enim nec elit dignissim tristique. Fusce ac arcu sit amet nulla hendrerit vestibulum id sit amet mauris. Praesent rhoncus pellentesque nunc in vulputate. Curabitur tempus vestibulum accumsan. Suspendisse eget tincidunt nibh, non iaculis arcu. Etiam semper diam sed varius porta. Phasellus ac vestibulum libero. Sed eros augue, eleifend quis viverra at, dictum luctus augue. Mauris scelerisque, sem suscipit feugiat ornare, risus orci ornare lacus, ut lacinia mi nunc ut erat. Ut vel interdum erat, et suscipit lorem. Duis eu justo sem. In auctor leo non velit laoreet, quis dignissim sem feugiat. Nunc porttitor, massa quis euismod vulputate, leo lorem sodales enim, nec vulputate orci nulla et mauris. Sed justo ligula, tempor ut accumsan nec, gravida vel lectus.

            Aliquam vel orci suscipit, hendrerit ante sed, sodales felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium varius felis, at elementum diam sodales vel. Aenean efficitur velit ut turpis ullamcorper, eleifend elementum velit semper. Quisque consequat bibendum tortor sit amet tempus. Ut nunc nisl, venenatis sollicitudin leo hendrerit, dapibus interdum dui. Cras blandit gravida risus eu pellentesque. Praesent dictum ac nisl vitae pretium. Praesent sed sem purus. Curabitur ultrices commodo ex, quis volutpat urna aliquet in. Donec bibendum egestas libero eu porttitor. Aenean condimentum vitae lacus interdum gravida.</p>

            <h2>Cras sagittis fermentum</h2>

            <ul>
               <li>Curabitur ultrices</li>
               <li>Cras blandit</li>
               <li>Phasellus pretium</li>
               <li>Aliquam vel orci</li>
               <li>Proin pharetra</li>
            </ul>

            <p>Cras semper feugiat lacus eget commodo. Aliquam nec tellus sed mauris vehicula tempus et sed tellus. Aliquam rhoncus augue eu purus luctus, sit amet convallis purus imperdiet. Sed pulvinar lacus vel lacus ultrices tempus. Sed maximus efficitur turpis, id malesuada lectus fermentum ac. Aenean congue orci vitae enim imperdiet condimentum id quis ante. Sed ac tortor felis. Sed consequat elit nisl. Cras quis varius urna, quis porta nisi. Sed cursus turpis lorem, et condimentum dolor tempus eu.</p>

         </main>

         <Footer />

      </main>
   )
}

export default TERMS_AND_COND