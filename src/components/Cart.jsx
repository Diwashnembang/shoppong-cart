import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'

import './cart.css'

import Items from './Items'
import removeFromItem from '../removeFromItem'

const Cart = ({ items, setIsCartClicked, setItems }) => {
  /* manage a state to know if animation is requkired */
  const [isAnimationStart, setIsAnimationStart] = useState(true)
  /* mangge state to remove item form the array setRemoveItem from items component*/
  const [removeItem, setRemoveItem] = useState({})
  const closeCart = () => {
    setIsAnimationStart(false)
  }

  const handleAnimationEnd = () => {
    if (!isAnimationStart) {
      /* sets is setIsCartClicked to false so that the app component doesnot render */
      setIsCartClicked(false)
    }
  }

  useEffect(() => {
    /* setItem chages items in app component and remove item comes form item component)  */
    setItems(removeFromItem(items, removeItem.id))
  }, [removeItem])
  return (
    <div
      id='cart'
      className={isAnimationStart ? 'slide-right' : 'slide-left'}
      onAnimationEnd={handleAnimationEnd}
      data-testid='cart-div'
      style={{minHeight : document.documentElement.scrollHeight}}
    >
      <div className='close-cart' onClick={closeCart} data-testid='close-cart'>
        <CloseIcon fontSize='large' />
      </div>
      <div id='cart-title'>
        <h1>
          <span className='block'>Your</span>
          <span className='block'>Shopping</span>
          <span className='block'>Bag</span>
        </h1>
      </div>
      <div id='show-items'>
        {!items.length <= 0
          ? items.map((element, index) => (
              <div className='item' key={index} data-testid='show-items'>
                <Items item={element} setRemoveItem={setRemoveItem} />
              </div>
            ))
          : 'Your Bag Is Empty'}
      </div>
    </div>
  )
}

export default Cart
