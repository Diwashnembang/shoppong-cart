import { Route, Routes } from 'react-router-dom'

import Nagivation from './components/Nagivation'
import Home from './components/Home'
import Shop from './components/Shop'
import Cart from './components/Cart'
import { useState } from 'react'

function App() {
  /* todoNo1 = open cart when clicked */

  const [isCartClicked, setIsCartClicked] = useState(false);
  return (
    <div className='App'>
      {/* when cart is clicked from nagivation it setIsCartClicked = true */} 
      <Nagivation setIsCartClicked={setIsCartClicked} />  
      {/* carts take items to render item and setIsCartClicked to close cart when closed is clcked */}
      {isCartClicked ? <Cart items={[]} setIsCartClicked={setIsCartClicked}/> : null}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>
    </div>
  )
}

export default App
