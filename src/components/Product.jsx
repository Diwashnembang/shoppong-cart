import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

import './product.css'

const Product = ({ item, addToCart }) => {
  const addToCartClicked = () => {
    addToCart(item)
  }
  return (
    <div className='product-card'>
      <div className='product-image'>
        <img src={item.src} alt={item.name} />
      </div>
      <div className='product-name'>{item.name}</div>
      <div className='product-price'>
        {item.price}
        <div className='add-product-to-cart' onClick={{ addToCartClicked }}>
          <AddShoppingCartIcon />
        </div>
      </div>
    </div>
  )
}

export default Product
