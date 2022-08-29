import { useEffect, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
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
  const [quantityProducts, setQuantityProducts] = useLocalStorage('quantityProducts', 0)
  const [showFeedbackToast, setShowFeedbackToast] = useState(false);
  const [newsletterResponse, setNewsletterResponse] = useState('')
  const [products, setProducts] = useState<IProductsResponse[]>([])
  const [test] = useState('context test its working correctly')

  return (
    <ProductsContext.Provider 
      value={{
        test, 
        products,
        showFeedbackToast, 
        setShowFeedbackToast,
        newsletterResponse,
        setNewsletterResponse,
        quantityProducts,
        setQuantityProducts
      }}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsProviders