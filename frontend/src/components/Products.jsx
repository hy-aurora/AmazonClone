import React from 'react'
import Product from './Product';
import './Products.css';
import { useState ,useEffect} from 'react';
import axios from 'axios';

function Products() {
  const [products,setProducts] = useState([]);
  useEffect(() => { 
                    axios.get('http://localhost:8000/api/v1/products')
                         .then((res) => setProducts(res.data))
                         .catch((err) => console.error(err))
                  }
           ,[]);

  return (
    <div className='Products'>
      { products.map((product,idx) => <Product {...product} ></Product>) }
    </div>
  )
}

export default Products