import React from 'react'
import Button from '../../REUSABLE/Button'
import { ProductCategories } from '../../../interfaces/OtherInterfaces'
import { useNavigate } from 'react-router-dom'
import { HiOutlineArrowSmRight } from 'react-icons/hi'
import TileCategory from './TileCategory'
import TileStars from './TileStars'

const Tile = ({ icon, category, rating, text }: ProductCategories) => {
   const n = useNavigate()

   const redirectSearch = () => n(`/search/${ category }`, { state: { query: category } }) 
   
   return (
      <article className="tile">

         <TileCategory icon={ icon } category={ category } />

         <p>{ text }</p>

         <TileStars rating={ rating } />

         <Button action={ redirectSearch } text='Check this out' additional={ <HiOutlineArrowSmRight /> } />

      </article>
   )
}

export default Tile