export type ProductCategory = 'Drinks' | 'Desserts' | 'Burgers' | 'Other' | 'Pizzas' | 'Fries'

export interface ProductCategories {
   category: string,
   icon: JSX.Element,
   rating: number,
   text: string
}

export interface ProductMiscellaneousInfo {
   icon: JSX.Element,
   text: string
}

export interface ProductType {
   title: string,
   price: number,
   rate: number,
   shortPara: string,
   id: string,
   addedDate: number,
   category: ProductCategory,
   image: string,
   miscInfo: ProductMiscellaneousInfo[],
   inUsersBasket: number,
   sizes: string[]
}

export interface OpinionType {
   name: string, 
   surname: string, 
   title: string, 
   rate: number, 
   txt: string,
   avatar: string
}

export type Ref<T = any> = React.RefObject<T>