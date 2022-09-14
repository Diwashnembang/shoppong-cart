import { Route, Routes } from 'react-router-dom'

import Nagivation from './components/Nagivation'
import Home from './components/Home'
import Shop from './components/Shop'
import Cart from './components/Cart'
import { useState } from 'react'

function App() {
  const [isCartClicked, setIsCartClicked] = useState(false)
  const [items, setItems] = useState(
    []
  ) /* change items throug shop components and cart components. Pass items to cart*/
  return (
    <div className='App'>
      {/* when cart is clicked from nagivation it setIsCartClicked = true */}
      <Nagivation setIsCartClicked={setIsCartClicked} />
      {/* carts take items to render item and setIsCartClicked to close cart when closed is clcked */}
      {isCartClicked ? (
        <Cart
          items={items}
          setIsCartClicked={setIsCartClicked}
          setItems={setItems}
        />
      ) : null}
      <Routes>
        <Route path='/shoppong-cart' element={<Home />} />
        <Route
          path='/shoppong-cart/shop'
          element={<Shop setItems={setItems} />}
        />
      </Routes>
    </div>
  )
}

export default App
