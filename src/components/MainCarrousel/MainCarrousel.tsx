import { Carousel } from "react-bootstrap";
import { carrouselImages } from "../../constants/constants";
import './styles.css'

const MainCarrousel = () => {
  return (
    <Carousel fade controls={false}>
      {
        carrouselImages.map(el=>(
          <Carousel.Item className={el.className} key={el.src}>
            <img
              className={`d-block w-100 ${el.className}`}
              src={el.src}
              alt="First slide"
            />
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
        ))
      }
    </Carousel>
  );
}

export default MainCarrousel