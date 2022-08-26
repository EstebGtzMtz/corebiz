import { useContext, useState } from 'react'
import './App.css'
import { ProductsContext } from './context/ProductsContext'
import ProductsProviders from './context/ProductsProviders'

function App() {

  const {test} = useContext(ProductsContext)
  const [newTest, setnewTest] = useState(test)

  return (
    <ProductsProviders>
      <div>
        <h1>context is now working correctly</h1>
      </div>
    </ProductsProviders>
  )
}

export default App
