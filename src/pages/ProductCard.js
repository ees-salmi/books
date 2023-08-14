//import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

function ProductCard(props) {
  return (
    <Card>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Container>
          <Row>
            <Col lg={9}>
            <InputGroup >
            <InputGroup.Text id="basic-addon1">commander</InputGroup.Text>
            <Form.Control
                placeholder="numero telephone"
                aria-label="produit"
                aria-describedby="basic-addon1"
            />
            </InputGroup>
            </Col>
            <Col lg={3}><Button variant="success">{props.price} dh</Button></Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default ProductCard