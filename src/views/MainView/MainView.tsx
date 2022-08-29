import { useContext } from 'react';
import FeedbackToast from '../../components/FeedBackToast/FeedbackToast';
import Footer from '../../components/Footer/Footer';
import MainCarrousel from '../../components/MainCarrousel/MainCarrousel';
import MainNavbar from '../../components/MainNavbar/MainNavbar';
import NewsLetter from '../../components/Newsletter/NewsLetter';
import ProductsCarrousel from '../../components/ProductsCarrousel/ProductsCarrousel';
import { ProductsContext } from '../../context/ProductsContext';
import './styles.css'

const MainView = () => {
  const {test, products} = useContext(ProductsContext)

  return (
      <div>
        <MainNavbar />
        <MainCarrousel />
        <ProductsCarrousel />
        <FeedbackToast />
        <NewsLetter />
        <Footer />
      </div>
  )
}

export default MainView