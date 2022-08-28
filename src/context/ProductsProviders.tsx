import { useEffect, useState } from 'react';
import { IProductsProviderProps, IProductsResponse } from '../interfaces/interfaces';
import { getProducts } from '../services/ProductsService';
import { ProductsContext } from './ProductsContext';

const ProductsProviders = ({children}: IProductsProviderProps) => {

  useEffect(() => {
    getProductsQuery()
  }, [])
  
  const getProductsQuery = async ()=>{
    const products = await getProducts();
    setProducts(products)
  }

  const [products, setProducts] = useState<IProductsResponse[]>([])
  const [test] = useState('context test its working correctly')

  return (
    <ProductsContext.Provider value={{test, products}}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsProviders