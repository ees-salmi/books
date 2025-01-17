import NavBar from '../src/pages/NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect,useState } from 'react';
import axios from "axios";
import './App.css';
import React from 'react';
import AllProducts from '../src/pages/AllProducts';
import SideBar from './pages/SideBar';


function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
    
  }, [data]);

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
      <Container>
        <Row>
          <Col xs={12} lg={2} md={6}>
            <SideBar/>
          </Col>
          <Col xs={12} lg={10} md={6}>
            <AllProducts />
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default App;
