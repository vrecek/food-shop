import React from 'react'
import { SelectTypeInterface } from '../../interfaces/SummaryInterfaces'
import InfoHeader from './InfoHeader'

const SelectType = ({ cname, label, rightItem, inputId }: SelectTypeInterface) => {
   return (
      <section className={ cname }>

         <input name={ inputId } type="radio" id={ inputId } />

         <label>{ label }</label>

         <span>{ rightItem }</span>

      </section>
   )
}

export default SelectType