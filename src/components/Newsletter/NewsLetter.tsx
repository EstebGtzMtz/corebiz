import { Button, Container, Form } from 'react-bootstrap'
import { INewsLetterInputs } from '../../interfaces/interfaces';
import { ProductsContext } from '../../context/ProductsContext';
import { useForm, SubmitHandler } from "react-hook-form";
import { subscribeToNewsletter } from '../../services/ProductsService';
import { useContext } from 'react';
import './styles.scss'

const NewsLetter = () => {

  const {setNewsletterResponse, setShowFeedbackToast} = useContext(ProductsContext)

  const { register, handleSubmit, formState: { errors } } = useForm<INewsLetterInputs>();

  const onSubmit: SubmitHandler<INewsLetterInputs> = async (data:INewsLetterInputs) => {
    const response = await subscribeToNewsletter(data)
    setNewsletterResponse(response)
    setShowFeedbackToast(true)
  }

  return (
    <Container fluid className='newsletter-content'>
      <Container>
        <h1>¡Únete a nuestras novedades y promociones!</h1>
        <Form 
          className="d-flex justify-content-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Form.Control
            type="search"
            placeholder="Ingresa tu nombre"
            className="me-2 mb-3 inputs-width"
            size='lg'
            {...register('name', {required: true})}
          />
          <Form.Control
            type="search"
            placeholder="Ingresa tu mail"
            className="me-2 mb-3 inputs-width"
            size='lg'
            {...register('email', {required:true})}
          />
          <Button type='submit' variant="dark">Suscribirme</Button>
        </Form>
        <Container>
          {errors.name && <span>This field is required</span>}
          {errors.email && <span>This field is required</span>}
        </Container>
      </Container>
    </Container>
  )
}

export default NewsLetter