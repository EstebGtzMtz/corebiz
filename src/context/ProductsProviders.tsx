import { useState } from 'react';
import { IProductsProviderProps } from '../interfaces/interfaces';
import { ProductsContext } from './ProductsContext';

const ProductsProviders = ({children}: IProductsProviderProps) => {

  const [test, setTest] = useState('test para ver si jala')

  return (
    <ProductsContext.Provider value={{test}}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsProviders