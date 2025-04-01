import React from 'react';
import './Home.css';
import NavBar from '../components/NavBar';
import Products from '../components/Products';

function Home() {
  return (
    <div className="Home">
      <NavBar/>
      <Products/>     
    </div>
  )
}

export default Home