import React from 'react'
import FigureImage from '../REUSABLE/FigureImage'

const BasicInfoImage = ({ image }: { image: string }) => {
   return (
      <section className="image">

         <FigureImage source={ image } altTxt='product' />

      </section>
   )
}

export default BasicInfoImage