import React from 'react';
import './Product.css';


function Product(product) {
  function fillStars(rating){
    const fullStars = Math.floor(rating); // 3.2 floor -> 3
    const halfStarExist = rating % 1 !== 0; // true
    const emptyStars = rating - fullStars - (halfStarExist? 1 : 0) // 5 - 3 - 1 = 1
    return new Array(5).fill().map( (ele) => "*")

  }
  
  return (
    <div className='Product'>
      <img src= {product.image_url} alt="image" />
      <h1>{product.title}</h1>
      <p>{product.price}</p>
      <p>{ fillStars(product.rating)}</p>   
      <button>add to cart</button>

    </div>
  )
}

export default Product