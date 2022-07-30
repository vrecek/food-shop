import React from "react";
import { ProductType, ProductCategories, ProductMiscellaneousInfo } from "./OtherInterfaces";

export interface TilesRowType {
   threeCategories: ProductCategories[]
}

type DisplayProduct = 'new' | 'popular'
export interface ProductContainerType {
   headerTxt: string,
   products: ProductType[],
   cname: string,
   displayType: DisplayProduct
}

export interface HomepageNewProductType {
   title: string,
   price: number,
   para: string,
   id: string,
   image: string
}

export interface HomepagePopularProductType extends HomepageNewProductType {
   rate: number,
   misc: ProductMiscellaneousInfo[]
}

export interface HomepageProductDivType {
   price: number, 
   title: string,
   para: string
}

export interface HeaderInfoType {
   cname: string,
   children: string
}

export type Direction = 'left' | 'right'
export interface SliderArrowType {
   dir: Direction,
   clickAction: (e: React.MouseEvent, dir: Direction) => void
}

export interface SlideType {
   sourceImg: string,
   content: JSX.Element,
   cname: string
}

export interface ButtonSliderType {
   clickFunc: (e: React.MouseEvent, num: number) => void,
   imgNum: number
}

export interface TileCategoryType {
   icon: JSX.Element,
   category: string
}

export interface TileRatingType {
   rating: number
}

export interface OpinionUserInfoType {
   image: string,
   name: string,
   surname: string
}

export interface OpinionTitleAndRateType {
   rate: number,
   title: string
}

export interface OpinionButtonsType {
   imgNum: number,
   clickFunc: (e: React.MouseEvent, num: number) => void
}

export interface HomepageProductsStateType {
   latest: ProductType[],
   all: ProductType[]
}