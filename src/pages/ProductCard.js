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
      <Button
        variant="info"
        size="sm"
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          zIndex: 1, // To make sure the button appears above the image
        }}
      >
        {props.price} dh
      </Button>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Container>
          <Row>
            
            <Col lg={10} sm={12}>
            <InputGroup >
            <Form.Control
                placeholder="Numero telephone"
                aria-label="produit"
                aria-describedby="basic-addon1"
            />
            </InputGroup>
            </Col>
            <Col lg={2} sm={12} style={{margin:'3px'}}>
            <Button id="basic-addon1" style={{width:'2cm',fontSize:'11px'}}>commander</Button>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default ProductCard