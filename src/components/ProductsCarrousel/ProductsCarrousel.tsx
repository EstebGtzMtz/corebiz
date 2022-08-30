import { useContext } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../../constants/constants";
import { ProductsContext } from "../../context/ProductsContext";
import { IProductsResponse } from "../../interfaces/interfaces";
import ProductCard from "../ProductCard/ProductCard";
import './styles.scss'

const ProductsCarrousel = () => {

  const {products} = useContext(ProductsContext)

  return (
    <Container className='carrousel-container mb-4'>
      <h1>Más Vendidos</h1>
      <Container>
        <Carousel responsive={responsive}>
        {
            products.map((el: IProductsResponse)=>(
              <ProductCard 
              key={el.productId}
              imageUrl={el.imageUrl}
              productName={el.productName}
              listPrice={el.listPrice}
              price={el.price}
              installments={el.installments}
              stars={el.stars}
              />
              ))
            }
        </Carousel>
      </Container>
    </Container>
  )
}

export default ProductsCarrousel;