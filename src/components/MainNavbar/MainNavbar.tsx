import { Container, Form, Nav, Navbar } from "react-bootstrap";
import {AiOutlineShoppingCart} from "react-icons/ai";
import './styles.css'

const MainNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">
        <img 
          src="https://lumimexicomx.vtexassets.com/assets/vtex/assets-builder/lumimexicomx.store-theme/2.0.1/corebiz_logo___792c2a7f859f5be56f796f3c6d27a2a6.png" 
          width="145.79"
          height="33.44"
        />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 search-bar"
              aria-label="Search"
            />
          </Form>
            <Nav.Link href="#action1">Mi cuenta</Nav.Link>
            <Nav.Link>
              <AiOutlineShoppingCart />
            </Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar