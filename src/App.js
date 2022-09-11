import { Route, Routes } from 'react-router-dom'

import Nagivation from './components/Nagivation'
import Home from './components/Home'
import Shop from './components/Shop'
import Cart from './components/Cart'
import { useState } from 'react'


const mock = {
  id: '001',
  src: 'assets/electronics/71Dc5Fh6kFL._AC_UY218_.jpg' ,
  price: '400',
  name: 'Graphic Card',
}

function App() {
  const [isCartClicked, setIsCartClicked] = useState(false)
  const [items, setItems] = useState([
    mock,
  ]) /* change items throug shop components pass items to cart*/
  return (
    <div className='App'>
      {/* when cart is clicked from nagivation it setIsCartClicked = true */}
      <Nagivation setIsCartClicked={setIsCartClicked} />
      {/* carts take items to render item and setIsCartClicked to close cart when closed is clcked */}
      {isCartClicked ? (
        <Cart items={items} setIsCartClicked={setIsCartClicked} />
      ) : null}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop setItems={setItems} />} />
      </Routes>
    </div>
  )
}

export default App
