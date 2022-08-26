import { useState } from 'react';
import { IProductsProviderProps } from '../interfaces/interfaces';
import { ProductsContext } from './ProductsContext';

const ProductsProviders = ({children}: IProductsProviderProps) => {

  return (
    <ProductsContext.Provider value={{}}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsProviders