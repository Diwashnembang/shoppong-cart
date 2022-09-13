import React, { useState, useEffect } from 'react'

import './shop.css'
import Product from './Product'

const products = [
  {
    id: '001',
    src: 'assets/electronics/71Dc5Fh6kFL._AC_UY218_.jpg',
    price: '400',
    name: 'Mac',
  },
  {
    id: '002',
    src: 'assets/electronics/710mNDEecxL._AC_UY218_.jpg',
    price: '1500',
    name: 'Iphone',
  },
  {
    id: '003',
    src: 'assets/electronics/geforce-rtx-3080-ti.jpg',
    price: '5000',
    name: 'Graphic Card',
  },
  {
    id: '004',
    src: 'assets/pants/614qJNN6NjL._AC_UL320_.jpg',
    price: '180',
    name: 'Awesome Pants',
  },
  {
    id: '005',
    src: 'assets/pants/51MCSj++j5L._AC_UL320_.jpg',
    price: '400',
    name: 'Nice Pants',
  },
  {
    id: '006',
    src: 'assets/shirts/615ENiyQ7UL._AC_UL320_.jpg',
    price: '300',
    name: 'Comfy Shirt',
  },
]

function Shop({ setItems }) {
  /* todo write function to update of App component to update cart  */
  const [itemsOnCart, setitemsOnCart] = useState({})
  useEffect(() => {
    setItems((prev) => [...prev, itemsOnCart])
  }, [itemsOnCart])
  return (
    <div id='shop'>
      <div className='products'>
        {products.map((item) => (
          <div
            key={item.id}
            className={'product-showcase'}
            data-testid={'product-showcase'}
          >
            <Product item={item} addToCart={setitemsOnCart} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Shop
