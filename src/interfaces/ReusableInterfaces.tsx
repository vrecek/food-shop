export interface FigureImageType {
   source: string,
   cname?: string,
   altTxt?: string
}

export interface BackgroundImageType {
   children?: any,
   cname?: string,
   url: string
}

export interface ButtonType {
   text: string,
   cname?: string,
   action?: React.MouseEventHandler,
   additional?: string | JSX.Element
}