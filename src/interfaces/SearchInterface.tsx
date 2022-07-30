import { ProductType, Ref } from "./OtherInterfaces"

export interface SearchLocationType {
   query: string
}

export interface SearchPageProduct {
   title: string,
   id: string,
   price: number,
   rate: number,
   image: string
}

export interface SearchResultContainerType {
   contRef: Ref<HTMLElement>,
   stateHook: SearchStateHookType
}

export interface SearchHeaderType {
   location: SearchLocationType,
   stateHook: SearchStateHookType
}

export interface SearchStateHookType {
   finished: boolean,
   products: ProductType[]
}