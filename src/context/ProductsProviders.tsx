import { useState } from 'react';
import { IProductsProviderProps } from '../interfaces/interfaces';
import { ProductsContext } from './ProductsContext';

const ProductsProviders = ({children}: IProductsProviderProps) => {

  const [test, setTest] = useState('context test its working correctly')

  return (
    <ProductsContext.Provider value={{test}}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsProviders