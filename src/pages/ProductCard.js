//import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
            <Col lg={2} sm={12} style={{margin:'3px'}}>
            <Button className='btn-success' id="basic-addon1" >commander</Button>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default ProductCard