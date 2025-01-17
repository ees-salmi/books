import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
  
const  ProductDetails = ({dish,dishes}) => {
    useEffect(() => {
       // setImage(dish.image);
        
      }, []);
      const [quantity , setQuantity] = useState(1);

    const addQuantity = () => {
        setQuantity(quantity+1);
    }
    const subQuantity = () => {

        if(quantity <= 1 ){
            setQuantity(1);
        } 
        else {
            let sbq = quantity - 1 ;
        setQuantity(sbq);
        }
        
    }

    const Pricetabe = () => {
        return(
            <Card>
            <Card.Body>
                <table>
                    <thead>
                        <tr>
                            <th>prix</th>
                            <th>quantité</th>
                            <th>sous totale</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{dish.price} dh</td>
                            <td>{quantity} unité</td>
                            <td>{quantity*dish.price} unité</td>
                        </tr>
                    </tbody>
                    
                </table>
            </Card.Body>
        </Card>
        )
    }

    
    if(dish != null)
        return(
            <Container>
                <Row>
                    <Col >
                        <h3>{dish.title}</h3>
                        <hr />
                    </Col>                
                </Row>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <Card >
                        <Card.Img style={{width:"18rem"}} top="true" src={dish.image} alt={dish.title} />
                        <Button
                            variant="info"
                            size="lg"
                            style={{
                            position: 'absolute',
                            top: '20px',
                            right: '20px',
                            zIndex: 1, // To make sure the button appears above the image
                            }}
                        >
                            {dish.price} dh
                        </Button>
                        <Card.Body>
                            <Card.Title>{dish.name}</Card.Title>
                            <Card.Footer>
                                <div className='thumb'>
                                    {imgs.map(item => {
                                        <img src={imageUrls}></img>
                                    })}
                                </div>
                            </Card.Footer>
                        </Card.Body>
                        </Card>
                        <Container className='mt-2'>
                            <Row>
                                
                            <InputGroup className="mb-3">
                            <Button onClick={addQuantity} variant="outline-secondary" id="button-addon1">
                                <i className="bi bi-plus-circle"></i>
                                </Button>
                                <Form.Control
                                className="text-center"
                                aria-label="Example text with button addon"
                                aria-describedby="basic-addon1"
                                value={quantity}
                                />
                                <Button onClick={subQuantity} variant="outline-secondary" id="button-addon1">
                                <i className="bi bi-dash-circle"></i>
                                </Button>
                            </InputGroup>
                            </Row>
                            <Row>
                                <Col>
                                    <Button style={{width: '100%',marginRight:"40px"}}>add to cart</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        
                                <h2>description</h2>
                                <p>{dish.description}</p>
                            <Pricetabe></Pricetabe>
                    </Col>
                </Row>
            </Container>
            );
        else
            return(
                <div></div>
            );  
}
            
export default ProductDetails;