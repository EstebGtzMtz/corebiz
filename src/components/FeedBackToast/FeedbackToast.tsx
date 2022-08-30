import { useContext } from "react";
import { Col, Row, Toast } from "react-bootstrap";
import { ProductsContext } from "../../context/ProductsContext";

const FeedbackToast = () => {

  const {showFeedbackToast,setShowFeedbackToast, newsletterResponse} = useContext(ProductsContext)

  return (
    <Row>
      <Col xs={6}>
        <Toast onClose={() => setShowFeedbackToast(false)} show={showFeedbackToast} delay={3000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Response</strong>
          </Toast.Header>
          <Toast.Body>{newsletterResponse}</Toast.Body>
        </Toast>
      </Col>
    </Row>
  )
}

export default FeedbackToast