import React from 'react'
import { ProductGet } from '../../interfaces/ProductPageInterfaces';
import BasicInfo from './BasicInfo';
import Ingredients from './Ingredients';
import ProductSuggestion from './ProductSuggestion';

const Content = ({ product }: ProductGet) => {
   return (
      <>
         <BasicInfo product={ product } />
         <Ingredients infos={ product.miscInfo } />
         <ProductSuggestion />
      </>
   )
}

export default Content