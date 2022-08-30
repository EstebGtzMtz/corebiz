import Footer from '../../components/Footer/Footer';
import MainCarrousel from '../../components/MainCarrousel/MainCarrousel';
import MainNavbar from '../../components/MainNavbar/MainNavbar';
import NewsLetter from '../../components/Newsletter/NewsLetter';
import ProductsCarrousel from '../../components/ProductsCarrousel/ProductsCarrousel';
import Toast from '../../components/Toaster/Toast';


const MainView = () => {

  return (
      <div>
        <MainNavbar />
        <MainCarrousel />
        <ProductsCarrousel />
        <Toast />
        <NewsLetter />
        <Footer />
      </div>
  )
}

export default MainView