import { ProductType } from "./OtherInterfaces"

export type ProductLocationType = {
   id: string
}

export interface ProductGet {
   product: ProductType
}

export interface InfoDetailsType {
   name: string,
   rate: number,
   category: string,
   price: number,
   sizes: string[],
   text: string,
   id: string
}

export interface SuggestedType {
   image: string,
   price: number,
   title: string,
   id: string
}