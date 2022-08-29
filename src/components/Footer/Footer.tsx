import { Button, Col, Container, Row } from 'react-bootstrap';
import { AiTwotoneMail } from "react-icons/ai";
import { BiHeadphone } from "react-icons/bi";
import './Footer.scss'

const Footer = () => {
  return (
    <Container fluid className='footer-container'>
      <Container className='elements-container'>
        <Row className='enterprise-info'>
          <Col className='columns'>
            <h3>Ubicacion</h3>
            <div className='line'/>
            <div>
              <h6>
                Avenida Andrômeda, 2000. Bloco 6 e 8
              </h6>
              <h6>Alphavile SP</h6>
              <h6>brasil@corebiz.ag</h6>
              <h6>+55 11 3090 1039</h6>
            </div>
          </Col>
          <Col className='columns'>
            <div className="column-buttons-container">
              <Button variant="light" size='lg' className='column-buttons'>
                <AiTwotoneMail />
                CONTÁCTANOS
              </Button>
              <Button variant="light" size='lg' className='column-buttons' style={{'marginTop': '1rem'}}>
                <BiHeadphone />
                HABLA CON UN ASESOR
              </Button>
            </div>
          </Col>
          <Col className='columns'>
            <div className='show-info-row'>
              <div>
                Desarrollado por
                <img 
                  src="https://i.imgur.com/Jq8ak3A.png"
                  width="82.81"
                  height="30.64"
                />
              </div>
              <div>
                Powered by
                <img 
                  src="data:image/png;base64,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"
                  width="82.81"
                  height="30.64"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Footer;