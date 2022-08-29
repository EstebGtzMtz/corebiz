export interface IProductsProviderProps {
  children: JSX.Element | JSX.Element[];
}

export interface ICarrouselElement{
  src: string
  className: string
}

export interface IDataProducts {
  data: IProductsResponse[]
}

export interface IProductsResponse {
  productId?: number
  productName: string
  stars: number
  imageUrl:string
  listPrice?: null | number,
  price: number,
  installments: IProductInstallments[]
}

export interface IProductInstallments {
  quantity: number
  value: number
}

export interface ISubscribeToNewsletterResponse{
  data:ISubscribeSuccesfully
}

export interface ISubscribeSuccesfully{
  message: string
}

export interface INewsLetterInputs {
  name: string
  email: string
}