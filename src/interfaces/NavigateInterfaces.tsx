import { ProductType } from "./OtherInterfaces"

export type AsideOption = 'basket' | 'menu'

export interface ToggleMenuFunc {
   toggleFunc: (e: React.MouseEvent, asideType: AsideOption) => void
}

export interface BasketNavContent {
   products: ProductType[]
}

export interface BasketNavItemType {
   name: string,
   price: number,
   image: string,
   quantity: number,
   id: string,
   noDelIcon?: boolean
}

export interface NavigateType {
   refHook: React.RefObject<HTMLElement>
}