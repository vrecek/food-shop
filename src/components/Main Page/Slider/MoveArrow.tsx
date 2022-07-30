import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { SliderArrowType } from '../../../interfaces/HomepageInterfaces'

const MoveArrow = ({ dir, clickAction }: SliderArrowType) => {
   const iconDisplay: JSX.Element = dir === 'left' ? <MdKeyboardArrowLeft /> : <MdKeyboardArrowRight />

   return (
      <span className={`icon ${ dir }`} onClick={ clickAction as any}>
         { iconDisplay }
      </span>
   )
}

export default MoveArrow