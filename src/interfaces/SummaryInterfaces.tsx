import { StateType } from "../data/BasketFunc"
import { ProductType } from "./OtherInterfaces"

export interface SummaryType {
   sumPrice: number,
   deliveryPrice: number
}

export interface SelectTypeInterface {
   rightItem: JSX.Element | string,
   label: string,
   inputId: string,
   cname: string
}

export interface DeliveryType {
   deliveryHook: React.Dispatch<React.SetStateAction<number>>
}

export interface RightSectionType {
   setHook: StateType,
   basket: ProductType[]
}