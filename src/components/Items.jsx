import React, { useEffect, useState } from 'react'
import './items.css'
const Items = ({ item }) => {
  const [noOfItems, setNoOfItems] = useState(1)
  const [price, setPrice] = useState(+item.price)

  const add = () => {
    setNoOfItems((prev) => +prev + 1)
  }

  const remove = () => {
    setNoOfItems((prev) => +prev - 1)
  }

  const noOfItemChange = (e) => {
    setNoOfItems((prev) => +e.target.value)
  }

  useEffect(() => {
    if (noOfItems > 1) {
      setPrice((prev) => +noOfItems * item.price)
    }
  }, [noOfItems])


  return (
    <>
      <div className='selected-item'>
        <div className='selectd-item-img' data-testid='selectd-item-img'>
          <img src={`${item.src}`} alt={`image of ${item.name}`} />
        </div>
        <div className='selected-item-info' data-testid='selected-item-name'>
          <p>{item.name}</p>
        </div>
        <div className='selected-item-price' data-testid='selected-item-price'>
          {price}
        </div>
      </div>
      <div className='upadate-no-of-item'>
        <div className='add'>
          <button type='button' onClick={add}>
            +
          </button>
        </div>

        <input
          type='text'
          name='no-of-item'
          className='no-of-item'
          value={noOfItems}
          onChange={noOfItemChange}
        />

        <div className='remove'>
          <button type='button' onClick={remove}>
            -
          </button>
        </div>
      </div>
    </>
  )
}

export default Items
