import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';import { Link } from 'react-router-dom';


        
function RenderProduct(dish) {
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card >
                  <Card.Img top src={dish.image} alt={dish.name} />
                  <Card.Body>
                      <Card.Title>{dish.name}</Card.Title>
                      <Card.Text>{dish.description}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
          );
}

        
    
const  ProductDetails = (props) => {

    if(props != null)
        return(

                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3>{props.name}</h3>
                                <hr />
                            </div>                
                        </div>
                        <div className="row">
                            <RenderProduct dish={props} />
                        </div>
                    </div>
                 );
                else
                    return(
                        <div></div>
                    );  
}
                

               
            
            

export default ProductDetails;