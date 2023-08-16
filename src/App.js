import NavBar from '../src/pages/NavBar';
import { Switch as Routes ,Route, Router,withRouter } from 'react-router-dom';

import { useEffect,useState } from 'react';
import axios from "axios";
import './App.css';
import React from 'react';
import AllProducts from '../src/pages/AllProducts';
import ProductDetails from '../src/pages/ProductDetails';


function App() {

  const [data, setData] = useState([]);
  const [product,setProduct] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setData(response.data);
      setProduct(data[0]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="App">
      <ProductDetails product={product} ></ProductDetails>
    </div>
  );
}

export default App;
