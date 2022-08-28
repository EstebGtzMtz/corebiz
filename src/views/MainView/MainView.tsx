import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import MainCarrousel from '../../components/MainCarrousel/MainCarrousel';
import MainNavbar from '../../components/MainNavbar/MainNavbar';
import NewsLetter from '../../components/Newsletter/NewsLetter';
import ProductCard from '../../components/ProductCard/ProductCard';
import { dataMock } from '../../constants/constants';
import { ProductsContext } from '../../context/ProductsContext';
import './styles.css'

const MainView = () => {
  const {test} = useContext(ProductsContext)

  return (
      <div>
        <MainNavbar />
        <MainCarrousel />
        <Container className='cards-row mb-4'>
          {
            dataMock.map(el=>(
              <ProductCard 
                key={el.productId}
                imageUrl={el.imageUrl}
                productName={el.productName}
                listPrice={el.listPrice}
                price={el.price}
                installments={el.installments}
              />
            ))
          }
        </Container>
        <Container>
          <h1>{test}</h1>
        </Container>
        <NewsLetter />
      </div>
  )
}

export default MainView