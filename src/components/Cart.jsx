import React from 'react'
import CloseIcon from '@mui/icons-material/Close'

import './cart.css'

import Items from './Items'

const Cart = ({ items, setIsCartClicked }) => {
  /* sets is setIsCartClicked to false so that the app component doesnot render */
  /* cart  */
  const closeCart = () => {
    setIsCartClicked(false)
  }
  return (
    <div id='cart'>
      <div className='close-cart' onClick={closeCart} data-testid="close-cart">
        <CloseIcon fontSize='large' />
      </div>
      <div id='cart-title'>
        <h1>
          <span className='block'>Your</span>
          <span className='block'>Shopping</span>
          <span className='block'>Bag</span>
        </h1>
      </div>
      <div id='show-items' >
        {items.map((element, index) => (
          <div className='item' key={index} data-testid="show-items">
            <Items item={element} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart
