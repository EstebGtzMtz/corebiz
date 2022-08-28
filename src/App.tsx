import { useContext, useState } from 'react'
import './App.css'
import { ProductsContext } from './context/ProductsContext'

const App = () => {

  const {test} = useContext(ProductsContext)

  return (
      <div>
        <h1>{test}</h1>
        <h1>context is now working correctly</h1>
      </div>
  )
}

export default App
