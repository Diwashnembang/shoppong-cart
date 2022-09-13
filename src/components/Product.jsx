import React from 'react'

import './product.css'

const Product = ({ item }) => {
  return (
    <div className='product-card'>
      <div className='product-image'>
        <img src={item.src} alt={item.name} />
      </div>
      <div className='product-name'>{item.name}</div>
      <div className='product-price'>{item.price}</div>
    </div>
  )
}

export default Product
