import { useContext, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating';
import { ProductsContext } from '../../context/ProductsContext';
import { IProductsResponse } from '../../interfaces/interfaces';
import './styles.scss'

const ProductCard = ({imageUrl, productName, listPrice, price, installments,stars}: IProductsResponse ) => {

  const {quantityProducts,setQuantityProducts} = useContext(ProductsContext);

  const addProducts = () => {
    setQuantityProducts(quantityProducts+1)
  }
  return (
    <Card className='card-style justify-content-center'>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body className='card-body'>
        <Card.Title className='card-title'>{productName}</Card.Title>
        <div>
        <Rating 
          readonly={true}
          initialValue={stars}
          ratingValue={0}
          size={11}
          fillColor={'#F8475F'}
        />
        </div>
        {
          listPrice && (
            <Card.Text className='card-list-price'> 
              de $ {listPrice}
            </Card.Text>
          )
        }
        <Card.Text className='card-price'>
          por $ {price}
        </Card.Text>
        {
          installments[0]?.quantity && (
            <Card.Text className='card-list-price'>
              o en {installments[0]?.quantity} de R {(installments[0].value/100).toFixed(2)}
            </Card.Text>
          )
        }
        <Button 
          variant="dark"
          className='show-button'
          size="lg"
          onClick={addProducts}
        >
          COMPRAR
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard