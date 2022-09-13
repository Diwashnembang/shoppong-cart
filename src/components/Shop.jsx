import React from 'react'

import './shop.css'
import Product from './Product'
const products = [
  {
    id: '001',
    src: 'assets/electronics/71Dc5Fh6kFL._AC_UY218_.jpg',
    price: '400',
    name: 'Graphic Card',
  },
  {
    id: '001',
    src: 'assets/electronics/71Dc5Fh6kFL._AC_UY218_.jpg',
    price: '400',
    name: 'Graphic Card',
  },
  {
    id: '001',
    src: 'assets/electronics/71Dc5Fh6kFL._AC_UY218_.jpg',
    price: '400',
    name: 'Graphic Card',
  },
  {
    id: '001',
    src: 'assets/electronics/71Dc5Fh6kFL._AC_UY218_.jpg',
    price: '400',
    name: 'Graphic Card',
  },
  {
    id: '001',
    src: 'assets/electronics/71Dc5Fh6kFL._AC_UY218_.jpg',
    price: '400',
    name: 'Graphic Card',
  },
  {
    id: '001',
    src: 'assets/electronics/71Dc5Fh6kFL._AC_UY218_.jpg',
    price: '400',
    name: 'Graphic Card',
  },
  {
    id: '001',
    src: 'assets/electronics/71Dc5Fh6kFL._AC_UY218_.jpg',
    price: '400',
    name: 'Graphic Card',
  },
]

function Shop({ setItems }) {
  /* todo first style this component */
  /* todo write function to update of App component to update cart  */
  return (
    <div id='shop'>
      <div className='products'>
        {products.map((item) => (
          <div
            key={item.id}
            className={'product-showcase'}
            data-testid={'product-showcase'}
          >
            <Product item={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Shop
