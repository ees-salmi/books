
import NavBar from '../src/pages/NavBar';
import ProductCard from '../src/pages/ProductCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState,useEffect } from 'react';
import axios from "axios";


import './App.css';
import React from 'react';


function App() {

 

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
    <div className="App">
        <NavBar />
        {/* <ProductCard title={title} description={description} price = {price}></ProductCard> */}
        {data.map(item => (
        <><Container style={{marginTop:'10px'}}>
            <Row>
              <Col sm={12}><ProductCard key={item.id} title={item.title} description={item.description} price={item.price} image={item.image}>{item.name}</ProductCard></Col>
              <Col  sm={12}><ProductCard key={item.id} title={item.title} description={item.description} price={item.price} image={item.image}>{item.name}</ProductCard></Col>
              <Col  sm={12}><ProductCard key={item.id} title={item.title} description={item.description} price={item.price} image={item.image}>{item.name}</ProductCard></Col>
              <Col  sm={12}><ProductCard key={item.id} title={item.title} description={item.description} price={item.price} image={item.image}>{item.name}</ProductCard></Col>
            </Row>
          </Container>
        </>
      ))}
    </div>
  );
}

export default App;
