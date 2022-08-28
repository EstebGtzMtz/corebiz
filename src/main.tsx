import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ProductsProviders from './context/ProductsProviders';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

function WithContext(){
  return(
    <ProductsProviders>
      <App />
    </ProductsProviders>
  )
}

root.render(
  <React.StrictMode>
    <WithContext />
  </React.StrictMode>
)
