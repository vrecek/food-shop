import React from 'react'
import '../../../css/TilesSection.css'
import { ProductCategories } from '../../../interfaces/OtherInterfaces'
import { IoFastFoodOutline } from 'react-icons/io5'
import { FaHamburger, FaPizzaSlice, FaIceCream } from 'react-icons/fa'
import { MdLocalDrink } from 'react-icons/md'
import { GiFrenchFries } from 'react-icons/gi'
import TileRow from './TileRow'

const TilesSection = () => {
   const categories: ProductCategories[] = [
      {
         category: 'Burgers',
         rating: 5,
         icon: <FaHamburger />,
         text: 'Donec metus sem, condimentum at nulla sit amet, laoreet accumsan elit vitae libero.'
      },

      {
         category: 'Drinks',
         rating: 4,
         icon: <MdLocalDrink />,
         text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla eaque veniam architecto laborum consectetur.'
      },

      {
         category: 'Desserts',
         rating: 4,
         icon: <FaIceCream />,
         text: 'Nunc scelerisque mi non velit fringilla egestas. Curabitur sagittis, ante sit amet lobortis ultricies, massa varius nulla.'
      },

      {
         category: 'Pizzas',
         rating: 5,
         icon: <FaPizzaSlice />,
         text: 'Aenean tempor accumsan lectus, eget euismod nulla molestie vitae. Vestibulum viverra, neque a sodales sollicitudin.'
      },

      {
         category: 'Fries',
         rating: 3,
         icon: <GiFrenchFries />,
         text: 'Donec rhoncus sapien nisl, vel blandit ex suscipit eu. Nullam eget magna mauris etiam porta.'
      },

      {
         category: 'Other',
         rating: 3,
         icon: <IoFastFoodOutline />,
         text: 'Donec id turpis purus. Maecenas eu metus eget diam sollicitudin laoreet. Suspendisse non nibh id velit facilisis sagittis.'
      }
   ]

   return (
      <section className="tiles-section">
         
         <h1 className='entry-header'>Choose what <span>you</span> want</h1>

         <section className="tile-container">

            <TileRow threeCategories={ categories.slice(0, 3) } />

            <TileRow threeCategories={ categories.slice(3, 6) } />

         </section>

      </section>
   )
}

export default TilesSection