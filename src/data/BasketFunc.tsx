import React, { createContext } from "react";
import { ProductCategory, ProductType } from "../interfaces/OtherInterfaces";
import Products from "./Products";

export type StateType = React.Dispatch<React.SetStateAction<ProductType[]>>

export interface BasketState {
   basket: ProductType[],
   setBasket: StateType
}

const BasketContext = createContext<BasketState>({
   basket: [],
   setBasket: () => {}
});

const isCategorySearched = (str: string): str is ProductCategory => {
   return ['Fast-Food', 'Drinks', 'Desserts', 'Burgers', 'Other', 'Pizzas', 'Fries'].includes(str)
}

const BasketFunctions = {
   deleteFromCart: (delId: string, basket: ProductType[], setHook: StateType): void => {
      const idFilter = (x: ProductType) => x.id === delId

      const basketId: number = basket.findIndex(idFilter)

      setHook((curr: ProductType[]) => {
         if(curr[basketId].inUsersBasket > 1) {
            curr[basketId].inUsersBasket -= 1

         }else {
            const productId: number = Products.findIndex(idFilter)
            Products[productId].inUsersBasket = 0

            basket.splice(basketId, 1)
         }
         
         return [...curr]
      })
   },

   addToCart: (delId: string, basket: ProductType[], setHook: StateType): void => {
      const idFilter = (x: ProductType) => x.id === delId

      setHook((curr: ProductType[]) => {
         if(basket.some(idFilter)) {
            const i: number = curr.findIndex(idFilter)
            curr[i].inUsersBasket += 1
            
         }else {
            const i: number = Products.findIndex(idFilter)

            if(i === -1) return [...curr]

            Products[i].inUsersBasket += 1
            
            curr.push(Products[i])
         }

         return [...curr]
      })
   },

   clearAllQuantity: (basket: ProductType[]): void => {
      for(let x of basket) {
         const { id } = x

         const i: number = Products.findIndex(x => x.id === id)
         Products[i].inUsersBasket = 0
      }
   },

   searchProduct: (str: string): ProductType[] => {
      if(str.length < 3) return []

      if(isCategorySearched(str)) {
         return Products.filter(x => x.category === str)
      }

      const regex: RegExp = new RegExp(`${ str }`, 'i')
      
      return Products.filter(x => regex.test(x.title) || regex.test(x.category))
   },

   shuffleProducts: <T,>(array: T[]): T[] => {
      let currentIndex = array.length, randomIndex
   
      while (currentIndex !== 0) {
         randomIndex = Math.floor(Math.random() * currentIndex)
         currentIndex--
   
         [array[currentIndex], array[randomIndex]] = 
         [array[randomIndex], array[currentIndex]]
      }
   
      return array;
   }
}

export default BasketContext
export { BasketFunctions }