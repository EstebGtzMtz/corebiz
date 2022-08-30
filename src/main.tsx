import React from 'react'
import ReactDOM from 'react-dom/client'
import ProductsProviders from './context/ProductsProviders';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainView from './views/MainView/MainView';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

function WithContext(){
  return(
    <ProductsProviders>
      <MainView />
    </ProductsProviders>
  )
}

root.render(
  <React.StrictMode>
    <WithContext />
  </React.StrictMode>
)