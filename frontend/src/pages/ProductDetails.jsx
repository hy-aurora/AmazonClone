import React from 'react'
import NavBar from '../components/NavBar';
import Filter from '../components/Filter';
import Product from '../components/Product';


function ProductDetails() {
  return (
    <div>
      <NavBar></NavBar>
      <div className='Home_Body'>
        <Filter></Filter>
        <Product></Product>
      </div>
    </div>
  )
}

export default ProductDetails