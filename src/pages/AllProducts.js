
import ProductCard from './ProductCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState,useEffect } from 'react';
import axios from "axios";
import React from 'react';


function AllProducts() {

 

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="AllProducts">
        {data.map(item => (
        <><Container style={{marginTop:'10px'}}>
            <Row>
              <Col style={{marginTop:'10px'}} lg={3} sm={12}><ProductCard key={item.id} title={item.title} description={item.description} price={item.price} image={item.image}>{item.name}</ProductCard></Col>
              <Col style={{marginTop:'10px'}} lg={3} sm={12}><ProductCard key={item.id} title={item.title} description={item.description} price={item.price} image={item.image}>{item.name}</ProductCard></Col>
              <Col style={{marginTop:'10px'}} lg={3} sm={12}><ProductCard key={item.id} title={item.title} description={item.description} price={item.price} image={item.image}>{item.name}</ProductCard></Col>
              <Col style={{marginTop:'10px'}} lg={3} sm={12}><ProductCard key={item.id} title={item.title} description={item.description} price={item.price} image={item.image}>{item.name}</ProductCard></Col>
            </Row>
          </Container>
        </>
      ))}
    </div>
  );
}

export default AllProducts;
